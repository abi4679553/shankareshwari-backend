const condidatelogicModel = require("../model/candidate")

const Createcandidatelogic = async (req,res) => {
    const {name, email, phone, age, gender, address, skills, education, experience, social, projects, certifications, languages, resume, profileImage, expectedSalary, noticePeriod, isActive} = req.body
    try{
        if (!name || !email || !phone || !age || !gender || !address || !skills || !education || !experience || !social || !projects || !certifications || !languages || !resume || !profileImage || !expectedSalary || !noticePeriod  || !isActive){
            return res.json({ success : false, message : "All filed are required"})
        }
     const isExisting = await condidatelogicModel.findOne({email})

     if(isExisting){
        return res.json({ success :false, message : "Already account exits please try again later" })
     }
     const newUser = new condidatelogicModel({
                    name,
            email,
            phone,
            age,
            gender,
            address,
            skills,
            education,
            experience,
            social,
            projects,
            certifications,
            languages,
            resume,
            profileImage,
            expectedSalary,
            noticePeriod,
            isActive
     });

     const save = await newUser.save()

     if (!save){
        return res.json({ success : false, message : "Failed to create please try again later"})
     }
     return res.json({ success : true, message : "Account cretaed successfully",save})

    }
    catch (err) {
        console.log("error in create  user ",err)
    }
}
module.exports = {Createcandidatelogic}