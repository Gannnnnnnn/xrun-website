"use client";

import React, { useState } from "react";

export default function RegisterPage() {
  const [form, setForm] = useState({
    nama: "",
    bib: "",
    ttl: "",
    umur: "",
    kategori: "",
    gender: "",
    ukuran: "",
    darurat: "",
    penyakit: "",
    darah: "",
    wa: "",
    izin: null,
    rekening: "",
    bukti: null,
    sanggup: "",
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setForm((prev) => ({ ...prev, [name]: files ? files[0] : value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Data pendaftaran:", form);
    alert("Pendaftaran berhasil! (fitur kirim email akan ditambahkan nanti)");
  };

  return (
    <main className="min-h-screen flex justify-center items-center bg-gray-100 p-8">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-2xl space-y-4"
      >
        <h1 className="text-2xl font-bold text-center text-blue-600 mb-4">
          Formulir Pendaftaran X-RUN 2K26
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input type="text" name="nama" placeholder="Nama Lengkap" onChange={handleChange} className="border p-2 rounded-lg" required />
          <input type="text" name="bib" placeholder="Nama BIB" onChange={handleChange} className="border p-2 rounded-lg" required />
          <input type="text" name="ttl" placeholder="Tempat, Tanggal Lahir" onChange={handleChange} className="border p-2 rounded-lg" required />
          <input type="number" name="umur" placeholder="Umur" onChange={handleChange} className="border p-2 rounded-lg" required />

          <select name="kategori" onChange={handleChange} className="border p-2 rounded-lg">
            <option value="">Pilih Kategori</option>
            <option value="Pelajar">Pelajar</option>
            <option value="Umum">Umum</option>
          </select>

          <select name="gender" onChange={handleChange} className="border p-2 rounded-lg">
            <option value="">Jenis Kelamin</option>
            <option value="Laki-laki">Laki-laki</option>
            <option value="Perempuan">Perempuan</option>
          </select>

          <select name="ukuran" onChange={handleChange} className="border p-2 rounded-lg">
            <option value="">Ukuran Jersey</option>
            <option value="S">S</option>
            <option value="M">M</option>
            <option value="L">L</option>
            <option value="XL">XL</option>
            <option value="XXL">XXL</option>
          </select>

          <input type="text" name="darurat" placeholder="Nomor Darurat" onChange={handleChange} className="border p-2 rounded-lg" required />
          <input type="text" name="penyakit" placeholder="Riwayat Penyakit" onChange={handleChange} className="border p-2 rounded-lg" />
          <input type="text" name="darah" placeholder="Golongan Darah" onChange={handleChange} className="border p-2 rounded-lg" />
          <input type="text" name="wa" placeholder="Nomor WhatsApp Peserta" onChange={handleChange} className="border p-2 rounded-lg" required />
          <input type="text" name="rekening" placeholder="Nomor Rekening / QRIS" onChange={handleChange} className="border p-2 rounded-lg" />

          <label className="text-sm text-gray-600 col-span-2">Upload File Perizinan (di bawah 17 tahun):</label>
          <input type="file" name="izin" onChange={handleChange} className="border p-2 rounded-lg col-span-2" />

          <label className="text-sm text-gray-600 col-span-2">Upload Bukti Transfer:</label>
          <input type="file" name="bukti" onChange={handleChange} className="border p-2 rounded-lg col-span-2" />
        </div>

        <div className="mt-4">
          <label className="block text-sm font-medium text-gray-700">Apakah kamu sanggup ikut X-RUN?</label>
          <select name="sanggup" onChange={handleChange} className="border p-2 rounded-lg w-full">
            <option value="">Pilih</option>
            <option value="Sanggup">Sanggup</option>
            <option value="Tidak">Tidak</option>
          </select>
        </div>

        <p className="text-sm text-gray-500 mt-4">
          CP Panitia: <strong>0812-5206-9949 (Regan)</strong>
        </p>

        <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white w-full py-2 rounded-lg font-semibold mt-4">
          Daftar Sekarang
        </button>
      </form>
    </main>
  );
}
