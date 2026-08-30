import { useEffect } from "react";
import { profile } from "../data/profile";

type Meta = {
  title: string;
  description?: string;
  /** Path only, e.g. "/projects". Used for the canonical + og:url. */
  path?: string;
};

const setMetaTag = (attr: "name" | "property", key: string, value: string) => {
  let el = document.head.querySelector<HTMLMetaElement>(
    `meta[${attr}="${key}"]`
  );
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", value);
};

const setLink = (rel: string, href: string) => {
  let el = document.head.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", rel);
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
};

/** Keeps <title> and the sharing/canonical tags in sync per route. */
export const useDocumentMeta = ({ title, description, path = "/" }: Meta) => {
  useEffect(() => {
    const desc = description ?? profile.pitch;
    const url = `${profile.siteUrl}${path}`;

    document.title = title;
    setMetaTag("name", "description", desc);
    setMetaTag("property", "og:title", title);
    setMetaTag("property", "og:description", desc);
    setMetaTag("property", "og:url", url);
    setMetaTag("name", "twitter:title", title);
    setMetaTag("name", "twitter:description", desc);
    setLink("canonical", url);
  }, [title, description, path]);
};
