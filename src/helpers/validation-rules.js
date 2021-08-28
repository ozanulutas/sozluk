const rules = {
  required: (message) => val => !!val || (message ? message : 'Bu alanın doldurulması zorunludur.'),
  email: (message) => val => /.+@.+\..+/.test(val) || (message ? message : 'Geçerli bir e-mail adresi girin.'),
  minLen: (len, message) => val => (val && val.length >= len) || (message ? message : `Bu alan en az ${len} karakter uzunluğunda olmalıdır.`),
  match: (target, message) => val => val === target || (message ? message : `Bu alan ${target} ile uyuşmalıdır.`),
}

export { rules }