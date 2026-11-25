import { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { ChevronRight } from 'lucide-react'

export default function TeamCard({ member }) {
  const profileDialog = useRef(null)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    if (!isOpen) return undefined

    const app = document.getElementById('root')
    const previousOverflow = document.body.style.overflow
    if (app) app.inert = true
    document.body.style.overflow = 'hidden'

    return () => {
      if (app) app.inert = false
      document.body.style.overflow = previousOverflow
    }
  }, [isOpen])

  const closeOnBackdrop = event => {
    if (event.target === event.currentTarget) profileDialog.current?.close()
  }

  const openProfile = () => {
    profileDialog.current?.showModal()
    setIsOpen(true)
  }

  const closeProfile = () => profileDialog.current?.close()

  return (
    <article className="team-card">
      <img className="team-image" src={member.image} alt={member.imageAlt} width={member.imageWidth} height={member.imageHeight} loading="lazy" decoding="async" />
      <h3>{member.name}</h3>
      {member.designation && <span>{member.designation}</span>}
      {member.summary && <p>{member.summary}</p>}
      <button
        className="text-button team-toggle"
        onClick={openProfile}
        type="button"
        aria-haspopup="dialog"
      >
        Show More <ChevronRight size={15} />
      </button>
      {createPortal(
        <dialog
          className="team-profile-dialog"
          ref={profileDialog}
          aria-labelledby={`profile-${member.name.replaceAll(' ', '-')}`}
          onClick={closeOnBackdrop}
          onClose={() => setIsOpen(false)}
        >
          <div className="team-profile-content">
          <button
            className="team-profile-close"
            onClick={closeProfile}
            type="button"
            aria-label="Close team member profile"
          >
            ×
          </button>
          <div className="team-profile-heading">
            <img src={member.image} alt={member.imageAlt} width={member.imageWidth} height={member.imageHeight} decoding="async" />
            <div>
              <h2 id={`profile-${member.name.replaceAll(' ', '-')}`}>{member.name}</h2>
              {member.designation && <span>{member.designation}</span>}
            </div>
          </div>
          {member.summary && <p className="team-profile-summary">{member.summary}</p>}
          <div className="team-card-extra">
          <p>{member.details}</p>
          {member.areas && (
            <>
              <h4>{member.areasHeading || 'Areas of Expertise'}</h4>
              <ul>{member.areas.map(area => <li key={area}>{area}</li>)}</ul>
            </>
          )}
          {member.modalities && (
            <>
              <h4>Therapeutic Modalities and Approaches</h4>
              <ul>{member.modalities.map(modality => <li key={modality}>{modality}</li>)}</ul>
            </>
          )}
          {member.approach && (
            <>
              <h4>{member.approachHeading || 'Approach'}</h4>
              <p>{member.approach}</p>
            </>
          )}
          {member.closing && <p>{member.closing}</p>}
          </div>
          <button
            className="button button-primary team-profile-dismiss"
            onClick={closeProfile}
            type="button"
          >
            Show Less
          </button>
          </div>
        </dialog>,
        document.body
      )}
    </article>
  )
}
