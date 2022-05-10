import React from 'react';

import Iframe from 'react-iframe';

function ContactMap() {
    return (
        <div className="map-container" style={{ marginBottom: '-2rem' }} >
            <Iframe
                url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15670.699450048181!2d106.8180030261653!3d10.912295875669619!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3174df288f6ecb25%3A0x4977211f3bcd0fe5!2zVMOibiBW4bqhbiwgVHAuIEJpw6puIEjDsmEsIMSQ4buTbmcgTmFpLCBWaeG7h3QgTmFt!5e0!3m2!1svi!2s!4v1651128091336!5m2!1svi!2s"
                width="100%"
                height="450px"
                allowFullScreen=""
                loading="lazy"
            />
        </div>
    );
}

export default ContactMap;