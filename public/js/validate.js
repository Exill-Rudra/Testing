// Checks what people type into the newsletter form.

export function isValidEmail(value) {
  return typeof value === 'string' && /@/.test(value) && value.length > 3;
}

export function cleanName(value) {
  return String(value ?? '').trim().replace(/\s+/g, ' ').slice(0, 60);
}
