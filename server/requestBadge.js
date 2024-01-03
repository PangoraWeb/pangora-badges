export async function RequestStaticBadge(
  { label, prefix, suffix, color, style, logo, logoColor, labelColor, value },
  cache
) {
  const siteCache = cache[value];

  // if the image in the cache is less than 5 minutes old (and exists), return it
  if (
    siteCache &&
    siteCache.timestamp > Date.now() - 300000 &&
    siteCache.options.label === label &&
    siteCache.options.prefix === prefix &&
    siteCache.options.suffix === suffix &&
    siteCache.options.color === color &&
    siteCache.options.style === style &&
    siteCache.options.logo === logo &&
    siteCache.options.logoColor === logoColor &&
    siteCache.options.labelColor === labelColor
  ) {
    return siteCache.image;
  }

  // Add all given parameters to the fetch URL
  let fetchContent = `${label}`;
  if (value) fetchContent += `-${value}`;
  fetchContent += `-${color}`;

  let fetchURL = `https://img.shields.io/badge/${fetchContent}`;
  fetchURL += `?label=${label}`;
  if (prefix) fetchURL += `&prefix=${prefix}`;
  if (suffix) fetchURL += `&suffix=${suffix}`;
  if (style) fetchURL += `&style=${style}`;
  if (logo) fetchURL += `&logo=${logo}`;
  if (logoColor) fetchURL += `&logoColor=${logoColor}`;
  if (labelColor) fetchURL += `&labelColor=${labelColor}`;

  const image = await fetch(fetchURL);
  const body = image.body;
  const buffer = [];

  for await (const data of body) {
    buffer.push(data);
  }

  const concbuffer = Buffer.concat(buffer);

  // Cache the image
  cache["static"] = {
    image: concbuffer,
    timestamp: Date.now(),
    options: {
      label,
      prefix,
      suffix,
      color,
      style,
      logo,
      logoColor,
      labelColor,
    },
  };
  return concbuffer;
}

export async function RequestBadge(
  site,
  query,
  { label, prefix, suffix, color, style, logo, logoColor, labelColor },
  cache,
  endpoint = "site",
  extraCacheCheck = ""
) {
  const siteCache = cache[site];

  // if the image in the cache is less than 5 minutes old (and exists), return it
  if (
    siteCache &&
    siteCache.timestamp > Date.now() - 300000 &&
    siteCache.options.label === label &&
    siteCache.options.prefix === prefix &&
    siteCache.options.suffix === suffix &&
    siteCache.options.color === color &&
    siteCache.options.style === style &&
    siteCache.options.logo === logo &&
    siteCache.options.logoColor === logoColor &&
    siteCache.options.labelColor === labelColor &&
    siteCache.options.extraCacheCheck === extraCacheCheck
  ) {
    return siteCache.image;
  }

  // Add all given parameters to the fetch URL
  let fetchURL = `https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2F${site}%2Fapi%2Fv3%2F${endpoint}&query=${query}`;
  if (label) fetchURL += `&label=${label}`;
  if (prefix) fetchURL += `&prefix=${prefix}`;
  if (suffix) fetchURL += `&suffix=${suffix}`;
  if (color) fetchURL += `&color=${color}`;
  if (style) fetchURL += `&style=${style}`;
  if (logo) fetchURL += `&logo=${logo}`;
  if (logoColor) fetchURL += `&logoColor=${logoColor}`;
  if (labelColor) fetchURL += `&labelColor=${labelColor}`;

  const image = await fetch(fetchURL);
  const body = image.body;
  const buffer = [];

  for await (const data of body) {
    buffer.push(data);
  }

  const concbuffer = Buffer.concat(buffer);

  // Cache the image
  cache[site] = {
    image: concbuffer,
    timestamp: Date.now(),
    options: {
      label,
      prefix,
      suffix,
      color,
      style,
      logo,
      logoColor,
      labelColor,
    },
  };
  return concbuffer;
}
