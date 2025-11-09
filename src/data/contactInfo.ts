import type { NavLink } from "../interfaces/types";

export const contactInfo = {
  address: "Zaubeekstraat 73, 9870 Zulte, Belgium",
  email: "eddy@vawat.be",
  phone: "+32 485 83 38 48",
  title: "Zaakvoerder",
  name: "Eddy Van Assche",
};

export const creatorInfo = {
  name: "Torben Van Assche",
  website: "https://www.torbenvanassche.dev",
}

export const companyInfo = {
  slogan: "We Care for Your Water!",
  yearsExperience: 12,
}

export const socialLinks = [
  { icon: "fab fa-facebook-f", url: "#", name: "Facebook" },
  { icon: "fab fa-linkedin-in", url: "https://www.linkedin.com/in/eddy-van-assche-9364749/", name: "LinkedIn" },
];

export const navLinks: NavLink[] = [
  { label: "Home", href: "#home"},
  { label: "About Us", href: "#about" },
  { label: "Services", href: "#service" },
  { label: "Contact", href: "#contact" },
];