import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["checkbox", "submitButton"];

  connect() {
    this.toggleButton();
  }

  toggleButton() {
    const anyChecked = this.checkboxTargets.some((checkbox) => checkbox.checked);
    this.submitButtonTarget.disabled = !anyChecked;
  }

  check() {
    this.toggleButton();
  }
}
