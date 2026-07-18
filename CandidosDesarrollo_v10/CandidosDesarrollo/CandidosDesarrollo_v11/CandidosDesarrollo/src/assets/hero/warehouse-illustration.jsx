// Ilustración vectorial original (silueta de depósito con montacargas
// cargando cajas) — se usa como decoración del Hero. Al ser vectorial
// propia (no una foto de stock), no hay problema de licencias.
function WarehouseIllustration({ className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 900 500"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMax slice"
    >
      {/* Estantería de fondo, hilera 1 */}
      <g opacity="0.5" fill="#f4b400">
        <rect x="30" y="80" width="10" height="360" />
        <rect x="30" y="150" width="230" height="8" />
        <rect x="30" y="240" width="230" height="8" />
        <rect x="30" y="330" width="230" height="8" />
        <rect x="255" y="80" width="10" height="360" />
      </g>

      {/* Cajas en la estantería */}
      <g opacity="0.35" fill="#f4b400">
        <rect x="55" y="90" width="46" height="58" rx="2" />
        <rect x="110" y="95" width="46" height="52" rx="2" />
        <rect x="165" y="88" width="46" height="60" rx="2" />
        <rect x="55" y="180" width="46" height="56" rx="2" />
        <rect x="110" y="182" width="46" height="54" rx="2" />
        <rect x="165" y="178" width="46" height="58" rx="2" />
        <rect x="55" y="268" width="46" height="58" rx="2" />
        <rect x="120" y="270" width="46" height="56" rx="2" />
      </g>

      {/* Estantería de fondo, hilera 2 (derecha) */}
      <g opacity="0.4" fill="#f4b400">
        <rect x="640" y="60" width="10" height="380" />
        <rect x="640" y="140" width="230" height="8" />
        <rect x="640" y="230" width="230" height="8" />
        <rect x="640" y="320" width="230" height="8" />
        <rect x="865" y="60" width="10" height="380" />
      </g>

      <g opacity="0.28" fill="#f4b400">
        <rect x="665" y="70" width="46" height="58" rx="2" />
        <rect x="720" y="75" width="46" height="52" rx="2" />
        <rect x="775" y="68" width="46" height="60" rx="2" />
        <rect x="665" y="160" width="46" height="58" rx="2" />
        <rect x="730" y="162" width="46" height="56" rx="2" />
        <rect x="795" y="158" width="46" height="58" rx="2" />
      </g>

      {/* Piso */}
      <rect x="0" y="440" width="900" height="4" fill="#f4b400" opacity="0.3" />

      {/* Montacargas — cuerpo */}
      <g transform="translate(330, 250)">
        <rect x="0" y="120" width="150" height="60" rx="6" fill="#f4b400" />
        <rect x="10" y="70" width="60" height="55" rx="4" fill="#f4b400" />
        {/* techo de protección */}
        <rect x="4" y="55" width="72" height="8" rx="2" fill="#f4b400" />
        <rect x="8" y="55" width="6" height="70" fill="#f4b400" />
        <rect x="66" y="55" width="6" height="70" fill="#f4b400" />

        {/* mástil */}
        <rect x="128" y="20" width="8" height="160" fill="#f4b400" />
        <rect x="148" y="20" width="8" height="160" fill="#f4b400" />

        {/* horquillas */}
        <rect x="150" y="150" width="90" height="8" fill="#f4b400" />
        <rect x="150" y="172" width="90" height="8" fill="#f4b400" />

        {/* pallet con cajas levantado */}
        <g transform="translate(160, 40)">
          <rect x="0" y="70" width="80" height="10" fill="#f4b400" />
          <rect x="4" y="10" width="34" height="58" rx="2" fill="#f4b400" />
          <rect x="42" y="15" width="34" height="53" rx="2" fill="#f4b400" />
        </g>

        {/* ruedas */}
        <circle cx="30" cy="185" r="18" fill="#f4b400" />
        <circle cx="115" cy="185" r="18" fill="#f4b400" />
      </g>

      {/* Cajas apiladas en el piso, izquierda */}
      <g fill="#f4b400" opacity="0.9">
        <rect x="70" y="360" width="70" height="80" rx="3" />
        <rect x="150" y="380" width="60" height="60" rx="3" />
        <rect x="85" y="300" width="55" height="55" rx="3" />
      </g>

      {/* Cajas apiladas en el piso, derecha */}
      <g fill="#f4b400" opacity="0.9">
        <rect x="700" y="350" width="75" height="90" rx="3" />
        <rect x="785" y="375" width="60" height="65" rx="3" />
        <rect x="715" y="285" width="52" height="58" rx="3" />
      </g>
    </svg>
  );
}

export default WarehouseIllustration;
