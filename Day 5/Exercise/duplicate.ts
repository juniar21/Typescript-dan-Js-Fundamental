function duplicate(arr:number[]) {
   let num:number[] = []
   let num2:number[] = []
   for (let i = 0; i <= arr.length-1; i++){
    if (!num.includes(arr[i])) { // negasi tanda seru untuk jika nilai false dijadikan true dan sebaliknya
        num.push(arr[i]);
    } else {
        num2.push(arr[i]) // ini sisa yang tidak di masukkan di atas di ambil

    }}
console.log(num);

console.log(num2);

}
console.log(duplicate([1, 2, 2, 3, 4, 4, 5,6,6,7,7]));

// bisa juga di sorting dulu terus di cek kanan dan kirinya yaitu arr[a-1] || arr[a+1] dan di tambah && !num includes