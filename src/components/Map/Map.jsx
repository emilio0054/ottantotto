import "./map.css";

export function Map() {
  return (
    <>
      <div className="map-container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2992.5938762880755!2d2.174922777019319!3d41.40462537129769!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a4a2dc66f79557%3A0xabf8d5723dc25c28!2sPizzeria%20Ottantotto!5e0!3m2!1ses-419!2ses!4v1686842637424!5m2!1ses-419!2ses"
          allowFullScreen=""
          loading=""
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </>
  );
}
