const mongoose = require("mongoose");

const candidateSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true,
        unique: true
    },

    phone: {
        type: String,
        required: true
    },

    age: {
        type: Number,
        required: true
    },

    gender: {
        type: String,
        enum: ["Male", "Female", "Other"]
    },

    address: {
        type: String
    },

    skills: [{
        type: String
    }],

    education: [
        {
            degree: String,
            department: String,
            college: String,
            university: String,
            percentage: Number,
            cgpa: Number,
            startYear: Number,
            endYear: Number,
            location: String
        }
    ],

    experience: [
        {
            company: String,
            designation: String,
            employmentType: String,
            location: String,
            startDate: Date,
            endDate: Date,
            currentlyWorking: Boolean,
            salary: Number,
            responsibilities: [String],
            technologies: [String]
        }
    ],

    social: [
        {
            platform: String,
            url: String,
            username: String
        }
    ],

    projects: [
        {
            title: String,
            description: String,
            technologies: [String],
            github: String,
            liveDemo: String
        }
    ],

    certifications: [
        {
            title: String,
            organization: String,
            issueDate: Date
        }
    ],

    languages: [
        {
            language: String,
            level: String
        }
    ],

    resume: {
        type: String
    },

    profileImage: {
        type: String
    },

    expectedSalary: {
        type: Number
    },

    noticePeriod: {
        type: String
    },

    isActive: {
        type: Boolean,
        default: true
    }

}, {
    timestamps: true
});

module.exports = mongoose.model("Candidate", candidateSchema);