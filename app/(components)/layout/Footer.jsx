import Link from "next/link";
import MaxWidth from "../shared_components/MaxWidth";

const Footer = ({ footerData }) => {
  const footerSocialIcons = [
    {
      id: 1,
      img: "/img/footer/facebook.svg",
      alt: "facebook",
      key: "facebook",
    },
    {
      id: 2,
      img: "/img/footer/linkedin.svg",
      alt: "linkedin",
      key: "linkedin",
    },
    {
      id: 3,
      img: "/img/footer/youtube.svg",
      alt: "youtube",
      key: "youtube",
    },
    {
      id: 4,
      img: "/img/footer/instagram.svg",
      alt: "instagram",
      key: "instagram",
    },
  ];
  return (
    <footer>
      <div className="bg-[#011E41] py-[4rem]">
        <MaxWidth>
          <div className="flex justify-between">
            <div>
              <Link href={"/"}>
                <img src="\img/footer/footer-logo.svg" alt="" />
              </Link>
            </div>
            <div className="flex gap-[2rem] items-center">
              {footerSocialIcons.map((item) => {
                const href = footerData?.[item.key];

                if (!href) return null;
                return (
                  <div key={item.id}>
                    <Link
                      key={item.key}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img src={item.img} alt={item.alt} />
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </MaxWidth>
      </div>
      <div></div>
    </footer>
  );
};

export default Footer;
