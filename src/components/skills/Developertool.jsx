import React from 'react'

const Developertool = () => {
  return (
    <div className="skills_content">
      <h3 className="skills_title">Developer Tools</h3>

      <div className="skills_box">
        {/* Left Column */}
        <div className="skills_group">
          <div className="skills_data">
            <i className="bx bx-badge-check"></i>
            <div>
              <h3 className="skills_name">Git</h3>
            </div>
          </div>

          <div className="skills_data">
            <i className="bx bx-badge-check"></i>
            <div>
              <h3 className="skills_name">GitHub</h3>
            </div>
          </div>

          <div className="skills_data">
            <i className="bx bx-badge-check"></i>
            <div>
              <h3 className="skills_name">Render</h3>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="skills_group">
          <div className="skills_data">
            <i className="bx bx-badge-check"></i>
            <div>
              <h3 className="skills_name">Postman</h3>
            </div>
          </div>

          <div className="skills_data">
            <i className="bx bx-badge-check"></i>
            <div>
              <h3 className="skills_name">VS Code</h3>
            </div>
          </div>

          <div className="skills_data">
            <i className="bx bx-badge-check"></i>
            <div>
              <h3 className="skills_name">Vercel</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Developertool