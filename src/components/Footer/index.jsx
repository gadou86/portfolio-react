import "./style.css";

const Footer = () => {
  return (
    <footer className="text-center mt-6	">
      <a
          href="https://www.github.com/gadou86"
          target="_blank" rel="noreferrer"
        >
          <i class="fab fa-github"></i>
      </a>
      
      <a
          href="https://www.facebook.com/gadou.dayan.1"
          target="_blank" rel="noreferrer"
        >
          <i class="fab fa-facebook"></i>
      </a>

      <a
          href="https://www.linkedin.com/in/gad-dayan"
          target="_blank" rel="noreferrer"
        >
          <i class="fab fa-linkedin"></i>
      </a>

      <a
          href="https://twitter.com/gadmtl86" rel="noreferrer"
          target="_blank" rel="noreferrer"
        >
          <i class="fab fa-twitter"></i>
      </a>
    </footer>
  );
};

export default Footer;
