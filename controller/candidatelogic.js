const condidatelogicModel = require("../model/candidate")

const Createcandidatelogic = async (req, res) => {
    const { name, email, phone, age, gender, address, skills, education, experience, social, projects, certifications, languages, resume, profileImage, expectedSalary, noticePeriod, isActive } = req.body
    try {
        if (!name || !email || !phone || !age || !gender || !address || !skills || !education || !experience || !social || !projects || !certifications || !languages || !resume || !profileImage || !expectedSalary || !noticePeriod || !isActive) {
            return res.json({ success: false, message: "All filed are required" })
        }
        const isExisting = await condidatelogicModel.findOne({ email })

        if (isExisting) {
            return res.json({ success: false, message: "Already account exits please try again later" })
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

        if (!save) {
            return res.json({ success: false, message: "Failed to create please try again later" })
        }
        return res.json({ success: true, message: "Account cretaed successfully", save })

    }
    catch (err) {
        console.log("error in create  user ", err)
    }
}

const fetchcandidate = async (req, res) => {
    try {
        const condidate = await condidatelogicModel.find({})

        if (!condidate) {
            return res.json({ success: "false", message: "candidate no fount " })
        }
        return res.json({ success: "ture", message: "candidate fetch successfully", data: condidate })
    }

    catch (err) {
        console.log("error in fetch candidate", err)
        return res.json({ success: false, message: "error in candidate" });
    }
}

const fetchcandidateByEmail = async (req, res) => {
    try {
        const { email } = req.params

        const candidate = await condidatelogicModel.findOne({ email })
        if (!candidate) {
            return res.json({ success: "false", message: "candidate not found" })
        }
        return res.json({ success: "true", message: "candidate fetch successfully", data: candidate })

    }
    catch (err) {
        console.log("Error in fetch candidate")
        return res.json({ success: false, message: "Error in fetch candidate" })
    }
}

const deletecandidate = async (req, res) => {
    try {
        const { email } = req.params

        const candidate = await condidatelogicModel.findOneAndDelete({ email })
        if (!candidate) {
            return res.json({
                success: "false",
                message: "candidate not found"
            });
        }
        res.json({
            success: "true",
            message: "candidate deleted successfully"
        });
    }
    catch (err) {
        return res.json({
            success: "false",
            message: err.message
        });
    }
}

const deleteAllcandidate = async (req, res) => {
    try {
        const candidate = await condidatelogicModel.deleteMany({});

        if (!candidate) {
            return res.json({
                success: true,
                message: "All candidates no deleted "
            });

        }
        return res.json({
            success: true,
            message: "All candidates deleted successfully"
        });

    }
    catch (err) {
        console.log(err);
        return res.json({
            success: false,
            message: "Error deleting candidates"
        });
    }
};

const updatecandidate = async (req, res) => {
    try {
        const { email } = req.params;

        const updateData = req.body;

        const candidate = await condidatelogicModel.findOneAndUpdate({email},req.body,{ new: true });

        if (!candidate) {
            return res.json({
                success: false,
                message: "Candidate not found"
            });
        }

        return res.json({
            success: true,
            message: "Candidate updated successfully",
            data: candidate
        });

    } catch (err) {
        console.log("Error in update candidate", err);
        return res.json({
            success: false,
            message: "Error in update candidate"
        });
    }
};

module.exports = { Createcandidatelogic, fetchcandidate, fetchcandidateByEmail, deletecandidate, deleteAllcandidate, updatecandidate }