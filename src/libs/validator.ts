import { AbstractControl } from "@angular/forms";

export function passwordMatchValidator(control: AbstractControl): {[key: string]: boolean} | null {
  const password = control.get('password');
  const confirmPassword = control.get('confirmPassword');

  if (password?.value !== confirmPassword?.value) {
    return { 'passwordMismatch': true };
  }

  return null;
}
