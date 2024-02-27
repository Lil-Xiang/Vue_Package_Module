import Swal, { SweetAlertPosition, SweetAlertIcon } from "sweetalert2";

type Params = {
  msg: string;
  icon: SweetAlertIcon;
  position?: SweetAlertPosition;
};

/**
 *
 * @param icon  "success" | "error" | "warning" | "info" | "question"
 * @param position "top" | "top-start" | "top-end" | "top-left" | "top-right" | "center" | "center-start" | "center-end" | "center-left" | "center-right" | "bottom" | "bottom-start" | "bottom-end" | "bottom-left" | "bottom-right"
 */
export function showAlert({ msg, icon, position = "top" }: Params) {
  const toast = Swal.mixin({
    toast: true,
    position: position,
    showConfirmButton: false,
    timer: 3000,
    padding: "2em",
    customClass: "sweet-alerts",
  });
  toast.fire({
    icon: icon,
    title: msg,
    padding: "2em",
    customClass: "sweet-alerts",
  });
}