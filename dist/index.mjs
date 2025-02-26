// src/ui/input.tsx
import * as React from "react";
import { jsx } from "react/jsx-runtime";
var Input = React.forwardRef(
  ({ className, type, ...props }, ref) => {
    return /* @__PURE__ */ jsx(
      "input",
      {
        type,
        className: `flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${className || ""}`,
        ref,
        ...props
      }
    );
  }
);
Input.displayName = "Input";

// src/ui/button.tsx
import * as React2 from "react";
import { jsx as jsx2 } from "react/jsx-runtime";
var Button = React2.forwardRef(
  ({ className, variant = "default", size = "default", ...props }, ref) => {
    const variantStyles = {
      default: "bg-primary text-primary-foreground hover:bg-primary/90",
      primary: "bg-blue-600 text-white hover:bg-blue-700",
      destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
      outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
      secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
      ghost: "hover:bg-accent hover:text-accent-foreground",
      link: "text-primary underline-offset-4 hover:underline"
    };
    const sizeStyles = {
      default: "h-10 px-4 py-2",
      sm: "h-9 rounded-md px-3",
      lg: "h-11 rounded-md px-8",
      icon: "h-10 w-10"
    };
    return /* @__PURE__ */ jsx2(
      "button",
      {
        className: `inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 ${variantStyles[variant]} ${sizeStyles[size]} ${className || ""}`,
        ref,
        ...props
      }
    );
  }
);
Button.displayName = "Button";

// src/components/Footer.tsx
import { jsx as jsx3, jsxs } from "react/jsx-runtime";

// src/components/Hero.tsx
import React4 from "react";

// src/components/EditionDropdown.tsx
import { useState } from "react";
import { jsx as jsx4, jsxs as jsxs2 } from "react/jsx-runtime";
var EditionDropdown = ({ onSelect, selectedEdition }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  const handleSelectEdition = (edition) => {
    onSelect(edition);
    setIsDropdownOpen(false);
  };
  return /* @__PURE__ */ jsxs2("div", { className: "relative w-full", children: [
    /* @__PURE__ */ jsxs2(
      "button",
      {
        type: "button",
        className: "flex h-10 items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 w-full",
        onClick: toggleDropdown,
        children: [
          /* @__PURE__ */ jsx4("span", { children: selectedEdition }),
          /* @__PURE__ */ jsx4(
            "svg",
            {
              xmlns: "http://www.w3.org/2000/svg",
              width: "24",
              height: "24",
              viewBox: "0 0 24 24",
              fill: "none",
              stroke: "currentColor",
              strokeWidth: "2",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              className: `lucide lucide-chevron-down h-4 w-4 opacity-50 transition-transform duration-300 ${isDropdownOpen ? "rotate-180" : ""}`,
              "aria-hidden": "true",
              children: /* @__PURE__ */ jsx4("path", { d: "m6 9 6 6 6-6" })
            }
          )
        ]
      }
    ),
    isDropdownOpen && /* @__PURE__ */ jsx4("ul", { className: "absolute z-10 mt-2 w-full bg-white border border-gray-300 rounded-md shadow-lg", children: ["ePub", "Kindle", "Paperback", "Large Print Paperback", "Hardcover", "Audiobook"].map((edition) => /* @__PURE__ */ jsx4(
      "li",
      {
        className: "cursor-pointer px-4 py-2 hover:bg-gray-100",
        onClick: () => handleSelectEdition(edition),
        children: edition
      },
      edition
    )) })
  ] });
};
var EditionDropdown_default = EditionDropdown;

// src/components/Hero.tsx
import { Link } from "@remix-run/react";
import { jsx as jsx5, jsxs as jsxs3 } from "react/jsx-runtime";
var Hero = ({ data }) => {
  const [selectedEdition, setSelectedEdition] = React4.useState("Select edition");
  const handleSelectEdition = (edition) => {
    setSelectedEdition(edition);
  };
  return /* @__PURE__ */ jsx5("section", { className: "w-full pt-12 md:py-20", children: /* @__PURE__ */ jsx5("div", { className: "container space-y-10 xl:space-y-16", children: /* @__PURE__ */ jsxs3("div", { className: "grid gap-4 px-4 md:grid-cols-2 md:gap-16", children: [
    /* @__PURE__ */ jsx5("div", { children: /* @__PURE__ */ jsx5(
      "img",
      {
        src: data.coverImage?.asset?.url || "https://via.placeholder.com/400x600",
        width: "400",
        height: "600",
        alt: data.title || "Book Cover",
        className: "mx-auto aspect-[2/3] overflow-hidden rounded-xl object-cover"
      }
    ) }),
    /* @__PURE__ */ jsxs3("div", { className: "flex flex-col items-start space-y-4", children: [
      /* @__PURE__ */ jsx5("h1", { className: "text-3xl font-bold sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem] font-breamcatcher", children: data.title || "Default Title" }),
      /* @__PURE__ */ jsxs3("h2", { className: "text-muted-foreground md:text-xl", children: [
        "By ",
        data.authorName || "Unknown Author"
      ] }),
      /* @__PURE__ */ jsx5("p", { className: "text-muted-foreground md:text-xl pt-2 pb-6 italic", children: data.tagline || "Unknown Tagline" }),
      /* @__PURE__ */ jsx5(
        EditionDropdown_default,
        {
          onSelect: handleSelectEdition,
          selectedEdition
        }
      ),
      /* @__PURE__ */ jsxs3("div", { className: "flex flex-wrap justify-between gap-2 mt-4 w-full", children: [
        /* @__PURE__ */ jsx5("button", { className: "flex-1 min-w-[calc(33.333%-0.5rem)] inline-flex items-center justify-center whitespace-nowrap text-sm font-medium bg-green-600 text-white hover:bg-green-700 h-11 rounded-md px-8 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2 ring-offset-background", children: "Add to Cart" }),
        /* @__PURE__ */ jsx5("button", { className: "flex-1 min-w-[calc(33.333%-0.5rem)] inline-flex items-center justify-center whitespace-nowrap text-sm font-medium bg-yellow-500 text-black hover:bg-yellow-600 h-11 rounded-md px-8 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2 ring-offset-background", children: "Buy Now" }),
        /* @__PURE__ */ jsx5(
          Link,
          {
            to: "#free",
            className: "flex-1 min-w-[calc(33.333%-0.5rem)] inline-flex items-center justify-center whitespace-nowrap text-sm font-medium bg-blue-600 text-white hover:bg-blue-700 h-11 rounded-md px-8 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 ring-offset-background",
            children: "Read Free"
          }
        )
      ] })
    ] })
  ] }) }) });
};
var Hero_default = Hero;

// src/ui/separator.tsx
import * as React5 from "react";
import { jsx as jsx6 } from "react/jsx-runtime";
var Separator = React5.forwardRef(
  ({ className, orientation = "horizontal", decorative = true, ...props }, ref) => {
    return /* @__PURE__ */ jsx6(
      "div",
      {
        ref,
        role: decorative ? "none" : "separator",
        "aria-orientation": decorative ? void 0 : orientation,
        className: `shrink-0 bg-gray-200 dark:bg-gray-700 ${orientation === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]"} ${className || ""}`,
        ...props
      }
    );
  }
);
Separator.displayName = "Separator";

// src/components/ArticleHeader.tsx
import { jsx as jsx7, jsxs as jsxs4 } from "react/jsx-runtime";
function ArticleHeader({ title, author, date }) {
  return /* @__PURE__ */ jsxs4("div", { className: "space-y-2 not-prose", children: [
    /* @__PURE__ */ jsx7("h1", { className: "text-4xl font-extrabold tracking-tight lg:text-5xl lg:leading-[3.5rem]", children: title }),
    /* @__PURE__ */ jsxs4("div", { className: "flex items-center space-x-4 text-muted-foreground", children: [
      /* @__PURE__ */ jsxs4("p", { children: [
        "By ",
        author
      ] }),
      /* @__PURE__ */ jsx7(Separator, { orientation: "vertical" }),
      /* @__PURE__ */ jsxs4("p", { children: [
        "Published on ",
        date
      ] })
    ] })
  ] });
}

// src/components/ArticleSection.tsx
import { jsx as jsx8, jsxs as jsxs5 } from "react/jsx-runtime";
function ArticleSection({ id, title, children }) {
  return /* @__PURE__ */ jsxs5("section", { id, children: [
    /* @__PURE__ */ jsx8("h2", { className: "text-2xl font-bold", children: title }),
    /* @__PURE__ */ jsx8("div", { children })
  ] });
}

// src/components/LoginButton.tsx
import { useEffect, useState as useState3 } from "react";
import Cookies from "js-cookie";

// src/components/SignInModal.tsx
import { useState as useState2 } from "react";
import { jsx as jsx9, jsxs as jsxs6 } from "react/jsx-runtime";

// src/components/LoginButton.tsx
import { Fragment, jsx as jsx10, jsxs as jsxs7 } from "react/jsx-runtime";

// src/components/LaunchForm.tsx
import { jsx as jsx11, jsxs as jsxs8 } from "react/jsx-runtime";

// src/components/Navbar.tsx
import { useState as useState4 } from "react";
import { Link as Link2 } from "@remix-run/react";
import { jsx as jsx12, jsxs as jsxs9 } from "react/jsx-runtime";

// src/components/ObfuscatedEmail.tsx
import { useEffect as useEffect2, useRef } from "react";
import { jsx as jsx13 } from "react/jsx-runtime";

// src/components/FacebookPixel.tsx
import { useEffect as useEffect3 } from "react";
function FacebookPixel() {
  useEffect3(() => {
    const script = document.createElement("script");
    script.innerHTML = `
      !function(f,b,e,v,n,t,s)
      {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
      n.callMethod.apply(n,arguments):n.queue.push(arguments)};
      if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
      n.queue=[];t=b.createElement(e);t.async=!0;
      t.src=v;s=b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t,s)}(window, document,'script',
      'https://connect.facebook.net/en_US/fbevents.js');
      fbq('init', '1443324729030249');
      fbq('track', 'PageView');
    `;
    document.head.appendChild(script);
    const noscript = document.createElement("noscript");
    const img = document.createElement("img");
    img.height = 1;
    img.width = 1;
    img.style.display = "none";
    img.src = "https://www.facebook.com/tr?id=1443324729030249&ev=PageView&noscript=1";
    noscript.appendChild(img);
    document.head.appendChild(noscript);
    return () => {
      document.head.removeChild(script);
      document.head.removeChild(noscript);
    };
  }, []);
  return null;
}

// src/components/KlaviyoScript.tsx
import { Fragment as Fragment2, jsx as jsx14, jsxs as jsxs10 } from "react/jsx-runtime";
function KlaviyoScript() {
  return /* @__PURE__ */ jsxs10(Fragment2, { children: [
    /* @__PURE__ */ jsx14(
      "script",
      {
        dangerouslySetInnerHTML: {
          __html: `
            window.klaviyo = window.klaviyo || [];
          `
        }
      }
    ),
    /* @__PURE__ */ jsx14(
      "script",
      {
        async: true,
        type: "text/javascript",
        src: "https://static.klaviyo.com/onsite/js/klaviyo.js?company_id=KChqVc"
      }
    )
  ] });
}

// src/components/GoogleTagManager.tsx
import { useEffect as useEffect4 } from "react";
import { useSearchParams } from "@remix-run/react";
function GoogleTagManager({ gtmId }) {
  const [searchParams] = useSearchParams();
  useEffect4(() => {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: "utmParameters",
      utmContent: searchParams.get("utm_content") || "",
      utmSource: searchParams.get("utm_source") || "",
      utmMedium: searchParams.get("utm_medium") || "",
      utmCampaign: searchParams.get("utm_campaign") || "",
      utmTerm: searchParams.get("utm_term") || ""
    });
    const script = document.createElement("script");
    script.innerHTML = `
      (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','${gtmId}');
    `;
    document.head.appendChild(script);
    const noscript = document.createElement("noscript");
    const iframe = document.createElement("iframe");
    iframe.src = `https://www.googletagmanager.com/ns.html?id=${gtmId}`;
    iframe.height = "0";
    iframe.width = "0";
    iframe.style.display = "none";
    iframe.style.visibility = "hidden";
    noscript.appendChild(iframe);
    document.body.insertBefore(noscript, document.body.firstChild);
    return () => {
      document.head.removeChild(script);
      document.body.removeChild(noscript);
    };
  }, [gtmId, searchParams]);
  return null;
}

// src/components/CookieConsent.tsx
import { useState as useState5, useEffect as useEffect5 } from "react";
import Cookies2 from "js-cookie";
import { jsx as jsx15, jsxs as jsxs11 } from "react/jsx-runtime";
function CookieConsent() {
  const [showConsent, setShowConsent] = useState5(false);
  useEffect5(() => {
    const hasConsented = Cookies2.get("cookieConsent") || localStorage.getItem("cookieConsent");
    if (!hasConsented) {
      setShowConsent(true);
    }
  }, []);
  const handleAccept = () => {
    Cookies2.set("cookieConsent", "true", { expires: 365 });
    localStorage.setItem("cookieConsent", "true");
    setShowConsent(false);
    Cookies2.set("returningVisitor", "true", { expires: 365 });
  };
  const handleDecline = () => {
    Cookies2.set("cookieConsent", "false", { expires: 365 });
    localStorage.setItem("cookieConsent", "false");
    setShowConsent(false);
  };
  if (!showConsent) return null;
  return /* @__PURE__ */ jsx15("div", { className: "fixed bottom-4 left-4 right-4 sm:left-auto max-w-sm z-50 \n                    bg-gray-900/95 text-[#f7f3e9] \n                    rounded-lg shadow-lg backdrop-blur-sm\n                    border border-[#f7f3e9]/10\n                    mx-auto sm:mx-0 sm:right-4", children: /* @__PURE__ */ jsxs11("div", { className: "p-4 space-y-3", children: [
    /* @__PURE__ */ jsx15("p", { className: "text-sm", children: "We use cookies to enhance your experience and remember your preferences." }),
    /* @__PURE__ */ jsxs11("div", { className: "flex gap-2 justify-end text-sm", children: [
      /* @__PURE__ */ jsx15(
        "button",
        {
          onClick: handleDecline,
          className: "px-3 py-1.5 rounded hover:bg-[#f7f3e9]/10 transition-colors",
          children: "Decline"
        }
      ),
      /* @__PURE__ */ jsx15(
        "button",
        {
          onClick: handleAccept,
          className: "px-3 py-1.5 bg-[#f7f3e9] text-gray-900 rounded \n                     hover:bg-[#f7f3e9]/90 transition-colors",
          children: "Accept"
        }
      )
    ] })
  ] }) });
}

// src/components/ProductDescription.tsx
import { PortableText } from "@portabletext/react";
import { jsx as jsx16, jsxs as jsxs12 } from "react/jsx-runtime";
var ProductDescription = ({ data }) => {
  console.log("Product Description Data:", data);
  return /* @__PURE__ */ jsx16("section", { className: "w-full py-12 md:py-24 lg:py-32 bg-muted", children: /* @__PURE__ */ jsx16("div", { className: "container px-4 md:px-6", children: /* @__PURE__ */ jsx16("div", { className: "grid gap-8 ", children: /* @__PURE__ */ jsxs12("div", { children: [
    /* @__PURE__ */ jsx16("h2", { className: "text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl", children: "About the Book" }),
    /* @__PURE__ */ jsx16("div", { className: "prose prose-lg", children: data?.blurb ? /* @__PURE__ */ jsx16(PortableText, { value: data.blurb }) : /* @__PURE__ */ jsx16("p", { children: "No description available." }) })
  ] }) }) }) });
};
var ProductDescription_default = ProductDescription;

// src/components/ReviewItem.tsx
import { jsx as jsx17, jsxs as jsxs13 } from "react/jsx-runtime";
function ReviewItem({ name, rating, text }) {
  return /* @__PURE__ */ jsxs13("div", { className: "p-4 bg-gray-100 rounded-md shadow-md", children: [
    /* @__PURE__ */ jsxs13("div", { className: "flex items-center gap-2 mb-2", children: [
      /* @__PURE__ */ jsx17("span", { className: "font-bold text-gray-800", children: name }),
      /* @__PURE__ */ jsxs13("span", { className: "text-sm text-gray-500", children: [
        rating,
        " out of 5 stars"
      ] })
    ] }),
    /* @__PURE__ */ jsx17("p", { className: "text-gray-700", children: text })
  ] });
}

// src/components/Reviews.tsx
import { jsx as jsx18, jsxs as jsxs14 } from "react/jsx-runtime";
function Reviews() {
  const reviews = [
    { id: 1, name: "John Doe", rating: 5, text: "The Bookshop of Yesteryear is a beautifully written and deeply moving novel. The characters and their stories will stay with me long after I've finished reading." },
    { id: 2, name: "Sarah Anderson", rating: 4, text: "This book is a love letter to independent bookstores and the communities they foster. I couldn't put it down!" },
    { id: 3, name: "Michael Johnson", rating: 4, text: "The Bookshop of Yesteryear is a delightful read that captures the magic and nostalgia of independent bookstores. Highly recommended!" }
  ];
  const averageRating = reviews.reduce((acc, review) => acc + review.rating, 0) / reviews.length;
  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 !== 0;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);
    return /* @__PURE__ */ jsxs14("div", { className: "flex items-center", children: [
      Array(fullStars).fill(0).map((_, i) => /* @__PURE__ */ jsx18("svg", { xmlns: "http://www.w3.org/2000/svg", className: "h-5 w-5 text-yellow-500", fill: "currentColor", viewBox: "0 0 20 20", children: /* @__PURE__ */ jsx18("path", { d: "M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.196 3.684a1 1 0 00.95.69h3.868c.969 0 1.371 1.24.588 1.81l-3.13 2.27a1 1 0 00-.364 1.118l1.196 3.684c.3.921-.755 1.688-1.538 1.118l-3.13-2.27a1 1 0 00-1.176 0l-3.13 2.27c-.783.57-1.838-.197-1.538-1.118l1.196-3.684a1 1 0 00-.364-1.118l-3.13-2.27c-.783-.57-.381-1.81.588-1.81h3.868a1 1 0 00.95-.69l1.196-3.684z" }) }, `full-${i}`)),
      halfStar && /* @__PURE__ */ jsx18("svg", { xmlns: "http://www.w3.org/2000/svg", className: "h-5 w-5 text-yellow-500", fill: "currentColor", viewBox: "0 0 20 20", children: /* @__PURE__ */ jsx18("path", { d: "M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.196 3.684a1 1 0 00.95.69h3.868c.969 0 1.371 1.24.588 1.81l-3.13 2.27a1 1 0 00-.364 1.118l1.196 3.684c.3.921-.755 1.688-1.538 1.118l-3.13-2.27a1 1 0 00-1.176 0l-3.13 2.27c-.783.57-1.838-.197-1.538-1.118l1.196-3.684a1 1 0 00-.364-1.118l-3.13-2.27c-.783-.57-.381-1.81.588-1.81h3.868a1 1 0 00.95-.69l1.196-3.684z" }) }, `half`),
      Array(emptyStars).fill(0).map((_, i) => /* @__PURE__ */ jsx18("svg", { xmlns: "http://www.w3.org/2000/svg", className: "h-5 w-5 text-gray-300", fill: "currentColor", viewBox: "0 0 20 20", children: /* @__PURE__ */ jsx18("path", { d: "M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.196 3.684a1 1 0 00.95.69h3.868c.969 0 1.371 1.24.588 1.81l-3.13 2.27a1 1 0 00-.364 1.118l1.196 3.684c.3.921-.755 1.688-1.538 1.118l-3.13-2.27a1 1 0 00-1.176 0l-3.13 2.27c-.783.57-1.838-.197-1.538-1.118l1.196-3.684a1 1 0 00-.364-1.118l-3.13-2.27c-.783-.57-.381-1.81.588-1.81h3.868a1 1 0 00.95-.69l1.196-3.684z" }) }, `empty-${i}`))
    ] });
  };
  return /* @__PURE__ */ jsx18("section", { className: "w-full md:w-2/3 mx-auto py-12 md:pt-20 bg-muted", children: /* @__PURE__ */ jsxs14("div", { className: "container px-4 md:px-6", children: [
    /* @__PURE__ */ jsx18("h2", { className: "text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl", children: "Reviews" }),
    /* @__PURE__ */ jsxs14("div", { className: "mt-2 flex items-center", children: [
      renderStars(averageRating),
      /* @__PURE__ */ jsxs14("span", { className: "ml-2 text-gray-600", children: [
        averageRating.toFixed(1),
        " out of 5 stars"
      ] })
    ] }),
    /* @__PURE__ */ jsx18("div", { className: "mt-4 space-y-4", children: reviews.map((review) => /* @__PURE__ */ jsx18(ReviewItem, { name: review.name, rating: review.rating, text: review.text }, review.id)) })
  ] }) });
}

// src/components/RelatedBookItem.tsx
import { jsx as jsx19, jsxs as jsxs15 } from "react/jsx-runtime";
function RelatedBookItem({ title, author, img }) {
  return /* @__PURE__ */ jsx19("div", { className: "rounded-lg border bg-card text-card-foreground shadow-sm", "data-v0-t": "card", children: /* @__PURE__ */ jsxs15("div", { className: "flex flex-col items-center justify-center gap-4 p-6", children: [
    /* @__PURE__ */ jsx19(
      "img",
      {
        src: img,
        width: "200",
        height: "300",
        alt: title,
        className: "aspect-[2/3] overflow-hidden rounded-xl object-cover"
      }
    ),
    /* @__PURE__ */ jsxs15("div", { className: "space-y-2 text-center", children: [
      /* @__PURE__ */ jsx19("h3", { className: "text-xl font-bold", children: title }),
      /* @__PURE__ */ jsxs15("p", { className: "text-muted-foreground", children: [
        "By ",
        author
      ] }),
      /* @__PURE__ */ jsx19("button", { className: "inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-9 rounded-md px-3", children: "Add to Cart" })
    ] })
  ] }) });
}

// src/components/RelatedBooks.tsx
import { jsx as jsx20, jsxs as jsxs16 } from "react/jsx-runtime";
var RelatedBooks = () => {
  const books = [
    { id: 1, title: "The Storied Life of A.J. Fikry", author: "Gabrielle Zevin", img: "https://via.placeholder.com/200x300" },
    { id: 2, title: "The Bookshop of Florentine", author: "Deborah Meyler", img: "https://via.placeholder.com/200x300" },
    { id: 3, title: "The Little Paris Bookshop", author: "Nina George", img: "https://via.placeholder.com/200x300" }
  ];
  return /* @__PURE__ */ jsx20("section", { className: "w-full py-12 md:py-20", children: /* @__PURE__ */ jsxs16("div", { className: "container px-4 md:px-6", children: [
    /* @__PURE__ */ jsx20("div", { className: "flex flex-col items-center justify-center space-y-4 text-center", children: /* @__PURE__ */ jsxs16("div", { className: "space-y-2", children: [
      /* @__PURE__ */ jsx20("h2", { className: "text-3xl font-bold tracking-tighter sm:text-5xl", children: "Related Books" }),
      /* @__PURE__ */ jsx20("p", { className: "max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed", children: "Explore more books that capture the essence of independent bookstores and the power of literature." })
    ] }) }),
    /* @__PURE__ */ jsx20("div", { className: "mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 sm:grid-cols-2 md:grid-cols-3 lg:gap-12", children: books.map((book) => /* @__PURE__ */ jsx20(RelatedBookItem, { title: book.title, author: book.author, img: book.img }, book.id)) })
  ] }) });
};
var RelatedBooks_default = RelatedBooks;

// src/components/ProductDetails.tsx
import { jsx as jsx21, jsxs as jsxs17 } from "react/jsx-runtime";
var ProductDetails = ({ data }) => {
  return /* @__PURE__ */ jsx21("section", { className: "w-full mt-16 py-12 md:pt-24 lg:pt-32", children: /* @__PURE__ */ jsxs17("div", { className: "container mx-auto px-4 lg:px-8 xl:px-16", children: [
    /* @__PURE__ */ jsx21("h2", { className: "text-2xl lg:text-3xl font-bold text-gray-800", children: "Product Details" }),
    /* @__PURE__ */ jsxs17("div", { className: "mt-6 space-y-4", children: [
      /* @__PURE__ */ jsxs17("p", { className: "text-sm md:text-base text-gray-700", children: [
        /* @__PURE__ */ jsx21("strong", { children: "ISBN:" }),
        " ",
        data.isbn || "No ISBN provided"
      ] }),
      /* @__PURE__ */ jsxs17("p", { className: "text-sm md:text-base text-gray-700", children: [
        /* @__PURE__ */ jsx21("strong", { children: "Word Count:" }),
        " ",
        data.wordCount || "No word count provided",
        " pages"
      ] }),
      /* @__PURE__ */ jsxs17("p", { className: "text-sm md:text-base text-gray-700", children: [
        /* @__PURE__ */ jsx21("strong", { children: "Original Publication Date:" }),
        " ",
        data.o_publishedAtError || "No original publication date provided"
      ] }),
      /* @__PURE__ */ jsxs17("p", { className: "text-sm md:text-base text-gray-700", children: [
        /* @__PURE__ */ jsx21("strong", { children: "Original Publisher:" }),
        " ",
        data.isbn || "No ISBN provided"
      ] }),
      /* @__PURE__ */ jsxs17("p", { className: "text-sm md:text-base text-gray-700", children: [
        /* @__PURE__ */ jsx21("strong", { children: "Genre:" }),
        " ",
        data.genre || "No genre provided"
      ] }),
      /* @__PURE__ */ jsxs17("p", { className: "text-sm md:text-base text-gray-700", children: [
        /* @__PURE__ */ jsx21("strong", { children: "Collections:" }),
        " ",
        data.collections || "No collection provided"
      ] })
    ] })
  ] }) });
};
var ProductDetails_default = ProductDetails;

// src/components/Shoutout.tsx
import { jsx as jsx22, jsxs as jsxs18 } from "react/jsx-runtime";
var Shoutout = () => {
  return /* @__PURE__ */ jsxs18("div", { className: "container mx-auto px-4 lg:px-8 xl:px-16", children: [
    /* @__PURE__ */ jsx22("h3", { className: "text-2xl font-bold text-gray-800", children: "Award Winner!" }),
    /* @__PURE__ */ jsx22("p", { className: "mt-2 text-sm text-gray-700", children: "This book won the prestigious Mystery Novel of the Year award in 1955." })
  ] });
};
var Shoutout_default = Shoutout;

// src/components/ProductPageLayout.tsx
import { jsx as jsx23, jsxs as jsxs19 } from "react/jsx-runtime";
var ProductPageLayout = ({ product }) => {
  console.log("Product data passed to layout:", product);
  return /* @__PURE__ */ jsx23("div", { className: "flex flex-col min-h-[100vh]", children: /* @__PURE__ */ jsxs19("main", { className: "flex-1", children: [
    /* @__PURE__ */ jsx23(
      Hero_default,
      {
        title: product.title,
        author: product.author
      }
    ),
    /* @__PURE__ */ jsx23("div", { className: "w-screen bg-gray-100", children: /* @__PURE__ */ jsxs19("div", { className: "container mx-auto px-4 lg:px-8 xl:px-16 py-8 lg:flex lg:gap-8", children: [
      /* @__PURE__ */ jsx23("div", { className: "w-full lg:w-1/2", children: /* @__PURE__ */ jsx23(
        ProductDescription_default,
        {
          description: product.description
        }
      ) }),
      /* @__PURE__ */ jsxs19("div", { className: "w-full lg:w-1/2 flex flex-col justify-start", children: [
        /* @__PURE__ */ jsx23("div", { children: /* @__PURE__ */ jsx23(
          ProductDetails_default,
          {
            ...product
          }
        ) }),
        /* @__PURE__ */ jsx23("div", { children: product.shoutout && /* @__PURE__ */ jsx23(Shoutout_default, { text: product.shoutout }) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx23("div", { className: "container mx-auto px-4 lg:px-8 xl:px-16", children: product.reviews && /* @__PURE__ */ jsx23(Reviews, { items: product.reviews }) }),
    /* @__PURE__ */ jsx23("div", { className: "container mx-auto px-4 lg:px-8 xl:px-16", children: product.relatedBooks && /* @__PURE__ */ jsx23(RelatedBooks_default, { items: product.relatedBooks }) }),
    /* @__PURE__ */ jsx23("div", { className: "container mx-auto px-4 lg:px-8 xl:px-16" })
  ] }) });
};
var ProductPageLayout_default = ProductPageLayout;
export {
  ArticleHeader,
  ArticleSection,
  CookieConsent,
  FacebookPixel,
  GoogleTagManager,
  KlaviyoScript,
  ProductDescription_default as ProductDescription,
  ProductDetails_default as ProductDetails,
  ProductPageLayout_default as ProductPageLayout,
  RelatedBooks_default as RelatedBooks,
  Reviews
};
//# sourceMappingURL=index.mjs.map