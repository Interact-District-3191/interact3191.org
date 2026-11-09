import PageHeader from '../components/PageHeader.jsx'
import ProfileLibrary from '../components/ProfileLibrary.jsx'
import '../styles/resources.css'

// District documents and shared Interact handbooks.
const resources = [
  {
    name: 'Charter an Interact Club',
    type: 'PDF',
    pages: 5,
    audience: 'For Rotary sponsor clubs and advisors',
    overview: 'Start an Interact club with guidance on sponsorship, membership, and chartering.',
    file: 'resources/charter-an-interact-club.pdf',
  },
  {
    name: 'Installation Guidelines',
    type: 'PDF',
    pages: 7,
    audience: 'For Interactors and advisors',
    overview: 'Plan your installation ceremony with agendas, checklists, and district guidance.',
    file: 'resources/installation-guidelines.pdf',
  },
  {
    name: 'Monthly Reporting Guidelines',
    type: 'PDF',
    pages: 6,
    audience: 'For Interactors and faculty coordinators',
    overview: 'Prepare monthly activity reports using the required formats, photos, and submission timelines.',
    file: 'resources/monthly-reporting-guidelines.pdf',
  },
  {
    name: 'How to Update Interact Club Information',
    type: 'PDF',
    audience: 'For Interactors and advisors',
    overview: 'A guide to updating your Interact club information.',
    source: 'Rotary International',
    driveId: '1jMDO4T1FAi2PwyDShY6SeV1C5ArsPpyx',
  },
  {
    name: 'Interact Handbook - A Guide for Interactors',
    type: 'PDF',
    audience: 'For Interactors',
    overview: 'A practical guide to participating in and leading an Interact club.',
    source: 'Rotary International',
    driveId: '1N77yMrDVdTUDXxj9duL7yk9QLIBS7NLz',
  },
  {
    name: 'Interact Handbook - A Guide for Sponsor Clubs and Advisors',
    type: 'PDF',
    audience: 'For Rotary sponsor clubs and advisors',
    overview: 'Guidance on sponsoring and supporting an Interact club.',
    source: 'Rotary International',
    driveId: '1LSW9ZOaRLz6Nm8wYlTpq4u1l2slzz5WD',
  },
]

export default function Resources() {
  return (
    <div className="resources-page rotary-pattern-page">
      <PageHeader title="Resources" description="Start your club. Welcome new leaders. Share your impact." />
      <section className="resources-documents" aria-labelledby="club-documents-title">
        <div className="container">
          <h2 id="club-documents-title" className="resources-section-title">Club Documents</h2>
          <div className="resources-list">
          {resources.map((resource) => {
            const fileUrl = resource.driveId ? `https://drive.google.com/file/d/${resource.driveId}/view` : `${import.meta.env.BASE_URL}${resource.file}`
            const downloadUrl = resource.driveId ? `https://drive.google.com/uc?export=download&id=${resource.driveId}` : fileUrl
            return (
              <article className="resource-guide" key={resource.file || resource.driveId}>
                <div className="resource-guide-content">
                  <div className="resource-guide-meta">
                    <span className="pill">{resource.type}</span>
                    {resource.pages && <span>{resource.pages} pages</span>}
                    {resource.source && <span>Source: {resource.source}</span>}
                  </div>
                  <h3>{resource.name}</h3>
                  <p className="resource-guide-audience">{resource.audience}</p>
                  <p className="resource-guide-overview">{resource.overview}</p>
                </div>
                <div className="resource-guide-actions">
                  <a className="btn btn-outline" href={fileUrl} target="_blank" rel="noopener noreferrer"
                    aria-label={`View ${resource.name} PDF (opens in a new tab)`}>
                    View PDF <span aria-hidden="true">↗</span>
                  </a>
                  <a className="btn btn-outline" href={downloadUrl} download={`${resource.name}.pdf`}
                    aria-label={`Download ${resource.name} PDF`}>
                    <span aria-hidden="true">↓</span> Download
                  </a>
                </div>
              </article>
            )
          })}
          </div>
          <div className="resources-library-link">
            <p>Looking for more resources?</p>
            <a href="https://drive.google.com/drive/folders/1m_ZxSL6OQWS70Mty089CjLZbGY2g4HAO?usp=sharing" target="_blank" rel="noopener noreferrer">Browse the full document library <span aria-hidden="true">↗</span></a>
          </div>
        </div>
      </section>
      <section className="resources-profiles" aria-labelledby="district-profiles-title">
        <div className="container">
          <h2 id="district-profiles-title" className="resources-section-title">District Leadership Profiles</h2>
          <ProfileLibrary />
        </div>
      </section>

    </div>
  )
}



