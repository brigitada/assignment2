function show_form() {
    let form_el = document.querySelector("#theForm");
  
    form_el.style.display = "block";
}

function submit() {
    let source_nama = document.querySelector("#form_nama");
    let source_role = document.querySelector("#form_role");
    let source_avail = document.querySelector("#form_avail");
    let source_usia = document.querySelector("#form_usia");
    let source_lokasi = document.querySelector("#form_lokasi");
    let source_pglmn = document.querySelector("#form_pglmn");
    let source_email = document.querySelector("#form_email");

    let target_nama = document.querySelector("#display_nama");
    let target_role = document.querySelector("#display_role");
    let target_avail = document.querySelector("#display_avail");
    let target_usia = document.querySelector("#display_usia");
    let target_lokasi = document.querySelector("#display_lokasi");
    let target_pglmn = document.querySelector("#display_pglmn");
    let target_email = document.querySelector("#display_email");

    let form_el = document.querySelector("#theForm");
    // ngubah text dengan yang disubmit:
    target_nama.innerText = source_nama.value;
    target_role.innerText = source_role.value;
    target_avail.innerText = source_avail.value;
    target_usia.innerText = source_usia.value;
    target_lokasi.innerText = source_lokasi.value;
    target_pglmn.innerText = source_pglmn.value;
    target_email.innerText = source_email.value;
    // supaya ketika abis klik submit, formnya hilang LAGI:
    form_el.style.display = "none";
}