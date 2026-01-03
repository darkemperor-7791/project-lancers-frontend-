// src/sidebarConfigs.js

export const sidebarConfigs = {
  settings: {
    title: "Settings",
    links: [
      { label: "Profile", to: "/setpf" },
      { label: "Account Security", to: "/setac" },
      { label: "Billing & Payments", to: "/bilpay" },
      { label: "Notification Settings", to: "/notiset" },
      { label: "Appearance", to: "/appear" },
      { label: "User Analytics", to: "/useranal" },
      { label: "Support", to: "/support" }
    ]
  },

  findFreelancers: {
    title: "Filters",
    links: [
      { label: "Domain", to: "#" },
      { label: "Skills", to: "#" },
      { label: "Ratings", to: "#" },
      { label: "Fee", to: "#" },
      { label: "Availability", to: "#" }
    ]
  }
};
