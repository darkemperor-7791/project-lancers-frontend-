import React, { useState } from "react";
import "../../styles/settings/Profile_edit_professional.css";
import useAutoResizeTextarea from "../../hooks/useAutoResizeTextarea";


export default function ProfessionalInfoForm() {
  const [educations, setEducations] = useState([{ degree: "", year: "" }]);
  const [skills, setSkills] = useState([{ skill: "", level: "" }]);
  const [projects, setProjects] = useState("");
  const [resume, setResume] = useState(null);
  const pjt = useAutoResizeTextarea();

  const degreeOptions = ["High School", "Associate", "Bachelor", "Master", "PhD", "Other"];
  const yearOptions = Array.from({ length: 50 }, (_, i) =>
    (new Date().getFullYear() - i).toString()
  );
  const skillOptions = [
    "JavaScript",
    "Python",
    "Java",
    "React",
    "Node.js",
    "SQL",
    "UI/UX",
    "Project Management",
    "Data Analysis",
    "Other",
  ];
  const levelOptions = ["Beginner", "Intermediate", "Advanced", "Expert"];

  const addEducation = () =>
    setEducations([...educations, { degree: "", year: "" }]);

  const updateEducation = (index, field, value) => {
    const updated = [...educations];
    updated[index][field] = value;
    setEducations(updated);
  };

  const removeEducation = (index) => {
    if (educations.length > 1) {
      setEducations(educations.filter((_, i) => i !== index));
    }
  };

  const addSkill = () => setSkills([...skills, { skill: "", level: "" }]);

  const updateSkill = (index, field, value) => {
    const updated = [...skills];
    updated[index][field] = value;
    setSkills(updated);
  };

  const removeSkill = (index) => {
    if (skills.length > 1) {
      setSkills(skills.filter((_, i) => i !== index));
    }
  };

  const handleResumeUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    if (file.size > 50 * 1024 * 1024) {
      alert("File size must be less than 50 MB");
      return;
    }
    if (file.type !== "application/pdf") {
      alert("Please upload a PDF file");
      return;
    }
    setResume(file);
  };

  const handleContinue = () => {
    const hasEducation = educations.some((e) => e.degree && e.year);
    const hasSkills = skills.some((s) => s.skill && s.level);

    if (!hasEducation || !hasSkills) {
      alert("Please add at least one education and one skill");
      return;
    }

    alert("Professional information submitted successfully!");
  };

  return (
    <div className="pfepro-page">
      <div className="pfepro-card">
        {/* HEADER */}
        <div className="pfepro-header">
          <h1 className="pfepro-title">Professional Information</h1>
          <span className="pfepro-mandatory">*Mandatory fields</span>
        </div>

        {/* FORM */}
        <div className="pfepro-form">
          {/* EDUCATION */}
          <section className="pfepro-section">
            <h2 className="pfepro-section-title">Education*</h2>

            {educations.map((edu, index) => (
              <div key={index} className="pfepro-row">
                <select
                  value={edu.degree}
                  onChange={(e) =>
                    updateEducation(index, "degree", e.target.value)
                  }
                >
                  <option value="">Degree</option>
                  {degreeOptions.map((d) => (
                    <option key={d} value={d}>
                      {d}
                    </option>
                  ))}
                </select>

                <select
                  value={edu.year}
                  onChange={(e) =>
                    updateEducation(index, "year", e.target.value)
                  }
                >
                  <option value="">Year</option>
                  {yearOptions.map((y) => (
                    <option key={y} value={y}>
                      {y}
                    </option>
                  ))}
                </select>

                {index === educations.length - 1 ? (
                  <button
                    className="pfepro-btn pfepro-btn-add"
                    onClick={addEducation}
                  >
                    Add new
                  </button>
                ) : (
                  <button
                    className="pfepro-btn pfepro-btn-remove"
                    onClick={() => removeEducation(index)}
                  >
                    Remove
                  </button>
                )}
              </div>
            ))}
          </section>

          {/* SKILLS */}
          <section className="pfepro-section">
            <h2 className="pfepro-section-title">Skills*</h2>

            {skills.map((skill, index) => (
              <div key={index} className="pfepro-row">
                <select
                  value={skill.skill}
                  onChange={(e) =>
                    updateSkill(index, "skill", e.target.value)
                  }
                >
                  <option value="">Skill</option>
                  {skillOptions.map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </select>

                <select
                  value={skill.level}
                  onChange={(e) =>
                    updateSkill(index, "level", e.target.value)
                  }
                >
                  <option value="">Level</option>
                  {levelOptions.map((l) => (
                    <option key={l} value={l}>
                      {l}
                    </option>
                  ))}
                </select>

                {index === skills.length - 1 ? (
                  <button
                    className="pfepro-btn pfepro-btn-add"
                    onClick={addSkill}
                  >
                    Add new
                  </button>
                ) : (
                  <button
                    className="pfepro-btn pfepro-btn-remove"
                    onClick={() => removeSkill(index)}
                  >
                    Remove
                  </button>
                )}
              </div>
            ))}
          </section>

          {/* PROJECTS */}
          <section className="pfepro-section">
            <h2 className="pfepro-section-title">Projects</h2>
            <textarea
              ref={pjt.textareaRef}
              onInput={pjt.handleInput}
              rows={6}
              value={projects}
              onChange={(e) => setProjects(e.target.value)}
              placeholder="Tell us about your projects you have built so far..."
            />
          </section>

          {/* RESUME */}
          <section className="pfepro-section pfepro-resume">
            <h2 className="pfepro-section-title">Resume</h2>

            <input
              type="file"
              accept=".pdf"
              hidden
              id="pfepro-resume-upload"
              onChange={handleResumeUpload}
            />

            <label
              htmlFor="pfepro-resume-upload"
              className="pfepro-resume-btn"
            >
              {resume ? resume.name : "Upload your resume (.pdf)"}
            </label>

            <p className="pfepro-resume-note">max. file size 50 MB</p>
          </section>

          {/* CONTINUE */}
          <div className="pfepro-continue">
            <button onClick={handleContinue}>Continue</button>
          </div>
        </div>
      </div>
    </div>
  );
}