import './opleidingen.css';

/**
 * Education Component
 * 
 * Deze component toont een gedetailleerd overzicht van mijn opleidingen:
 * - Software Development (Huidig - MBO Niveau 4)
 * - Kind Professional/Onderwijsassistent (Afgebroken - MBO Niveau 4)
 * - Facilitaire Dienstverlening en Helpende Zorg en Welzijn (Afgerond - MBO Niveau 2)
 * 
 * Inclusief extra informatie over:
 * - Scrum werkmethodiek
 * - Vakken en docenten
 * - Stagemogelijkheden
 * - Leermethodes
 */

const Education = () => {
  // Data structuur voor opleidingen met alle details
  const educations = [
    {
      id: 1,
      year: "2023 - Huidig",
      status: "Bezig",
      title: "Software Development",
      institution: "Scalda Terneuzen",
      level: "MBO Niveau 4",
      duration: "4 jaar (5 levels: 0-4)",
      completed: false,
      description: "Een complete opleiding in softwareontwikkeling waar ik leer programmeren en werken volgens professionele standaarden. We werken in levels waarbij level 0 en 1 in het eerste jaar behaald moeten worden."
    },
    {
      id: 2,
      year: "2022 - 2023",
      status: "Afgebroken",
      title: "Kindprofessional (Onderwijsassistent)",
      institution: "Scalda Terneuzen",
      level: "MBO Niveau 4",
      duration: "Niet voltooid",
      completed: false,
      description: "Ik heb deze opleiding gevolgd maar ben gestopt omdat ik de opleiding niet zo leuk vond en koos voor Software Development. De opleiding bood keuze tussen Pedagogische Medewerker (niveau 3/4) en Onderwijsassistent (alleen niveau 4).",
      reason: "Gestopt vanwege persoonlijke interesse in technologie en software development",
      options: [
        "Kindprofessional Pedagogische Medewerker (Niveau 3 en 4)",
        "Kindprofessional Onderwijsassistent (Alleen Niveau 4)",
        "Combinatie van beide op Niveau 4"
      ]
    },
    {
      id: 3,
      year: "2021 - 2022",
      status: "Afgerond",
      title: "Facilitaire Dienstverlening en Helpende Zorg en Welzijn",
      institution: "Scalda Terneuzen",
      level: "MBO Niveau 2",
      duration: "Voltooid",
      completed: true,
      description: "Mijn eerste MBO opleiding die ik succesvol heb afgerond. Deze opleiding vormde de basis voor mijn verdere ontwikkeling in het MBO."
    }
  ];

  return (
    <div className={`education-container education-theme-purple`}>
      {/* Header sectie met titel en introductie */}
      <div className="education-hero">
        <h1 className="section-title">Mijn Opleidingen</h1>
        <p className="section-subtitle">Van zorg naar technologie: mijn educatieve ontwikkeling</p>
      </div>

      {/* Timeline met alle opleidingen */}
      <div className="education-timeline">
        {educations.map((edu, index) => (
          <div
            key={edu.id}
            className={`education-item`}
            data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
          >
            {/* Datum en status badge */}
            <div className="education-date">
              <span className="year">{edu.year}</span>
              <span className={`status status-${edu.status.toLowerCase()}`}>{edu.status}</span>
            </div>

            {/* Hoofdinhoud van de opleiding */}
            <div className="education-content">
              <div className="content-header">
                <h3>{edu.title}</h3>
                <span className="institution">{edu.institution}</span>
                <span className="level">{edu.level}</span>
              </div>

              <div className="content-body">
                <p className="description">{edu.description}</p>

                {/* Reden voor stoppen (alleen voor afgebroken opleiding) */}
                {edu.reason && (
                  <div className="reason-section">
                    <h4><i className="fas fa-info-circle"></i> Reden voor wijziging</h4>
                    <p>{edu.reason}</p>
                  </div>
                )}

                {/* Opties (voor Kindprofessional) */}
                {edu.options && (
                  <div className="options-section">
                    <h4>Opleidingsmogelijkheden</h4>
                    <ul>
                      {edu.options.map((option, idx) => (
                        <li key={idx}>{option}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Extra informatie sectie over Scrum */}
      <div className="extra-info-section">
        <div className="info-card">
          <div className="info-header">
            <i className="fas fa-tasks"></i>
            <h3>Scrum Werkmethodiek</h3>
          </div>
          <p>
            Scrum werkmethode is een manier van werken waarin teams worden georganiseerd en gefaciliteerd 
            om in korte cycli stapsgewijs te werken aan concrete tussenproducten. Deze cycli worden sprints genoemd. 
            Deze methodiek wordt intensief toegepast tijdens de opleiding Software Development.
          </p>
        </div>

        <div className="info-card">
          <div className="info-header">
            <i className="fas fa-certificate"></i>
            <h3>Kwalificatiedossier</h3>
          </div>
          <div className="qualification-sections">
            <div className="qual-item">
              <h4>Basisdeel</h4>
              <p>Algemene vaardigheden zoals Nederlands, rekenen, loopbaan, burgerschap en Engels voor niveau 4.</p>
            </div>
            <div className="qual-item">
              <h4>Profieldeel</h4>
              <p>Specifieke vaardigheden voor software development, zoals programmeertalen en werkmethodieken.</p>
            </div>
            <div className="qual-item">
              <h4>Keuzedelen</h4>
              <p>Optionele onderdelen om vakmanschap te verbreden of verdiepen.</p>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Education;