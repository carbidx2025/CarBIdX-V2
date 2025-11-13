// Token helpers using namespaced keys

export function isDealerLoggedIn() {
  return !!localStorage.getItem('cbx_dealer_token');
}

export function isAdminLoggedIn() {
  return !!localStorage.getItem('cbx_admin_token');
}

export function loginDealer(token) {
  localStorage.setItem('cbx_dealer_token', token);
}

export function loginAdmin(token) {
  localStorage.setItem('cbx_admin_token', token);
}

export function logoutDealer() {
  localStorage.removeItem('cbx_dealer_token');
}

export function logoutAdmin() {
  localStorage.removeItem('cbx_admin_token');
}
