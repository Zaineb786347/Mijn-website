import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div style={{minHeight:'60vh',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',textAlign:'center',padding:'2rem'}}>
      <h1 className="section-title">Pagina niet gevonden</h1>
      <p className="section-subtitle">De pagina die je zoekt bestaat niet.</p>
      <Link to="/" className="btn btn-primary" aria-label="Terug naar home">Terug naar Home</Link>
    </div>
  );
};

export default NotFound;
