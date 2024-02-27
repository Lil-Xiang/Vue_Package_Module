<script lang="ts" setup>
import Swal from 'sweetalert2';
import { showAlert } from '../components/sweetablert/utils/showMessage'

function popUp1() {
  Swal.fire('Any fool can use a computer')
}
function popUp2() {
  Swal.fire({
    title: 'Do you want to save the changes?',
    showDenyButton: true,
    showCancelButton: true,
    confirmButtonText: 'Save',
    denyButtonText: `Don't save`,
    cancelButtonText: `cancle`,
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire('Saved!', '', 'success')
    } else if (result.isDenied) {
      Swal.fire('Changes are not saved', '', 'info')
    }
  })
}
function popUp3() {
  const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
      confirmButton: 'btn btn-success',
      cancelButton: 'btn btn-danger'
    },
    buttonsStyling: true
  })
  swalWithBootstrapButtons.fire({
    title: 'Are you sure?',
    text: "You won't be able to revert this!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Yes, delete it!',
    cancelButtonText: 'No, cancel!',
    reverseButtons: true
  }).then((result) => {
    if (result.isConfirmed) {
      swalWithBootstrapButtons.fire(
        'Deleted!',
        'Your file has been deleted.',
        'success'
      )
    } else if (
      /* Read more about handling dismissals below */
      result.dismiss === Swal.DismissReason.cancel
    ) {
      swalWithBootstrapButtons.fire(
        'Cancelled',
        'Your imaginary file is safe :)',
        'error'
      )
    }
  })
}
function popUp4() {
  showAlert({ msg: '測試MSG', icon: 'success' })
}
</script>

<template>
  <div class="body">
    <button class="btn" @click="popUp1">ClickToPop1</button>
    <button class="btn" @click="popUp2">ClickToPop2</button>
    <button class="btn" @click="popUp3">ClickToPop3</button>
    <button class="btn" @click="popUp4">ClickToShowMsg</button>
  </div>
</template>

<style scoped>
.body {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 50px;
  width: 100%;
  height: 100%;
  background-color: rgb(164, 240, 215);
}

.btn {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 50px;
  border-radius: 10%;
  cursor: pointer;
  background-color: rgb(55, 100, 237);
}
</style>