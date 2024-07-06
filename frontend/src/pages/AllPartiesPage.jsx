import AddParties from '@/components/AddParties';
import PartiesGraph from '@/components/PartiesGraph';
import { useState } from 'react';

const AllParties = () => {
  const [form, setForm] = useState({
    magalada: '',
    goobtCodbixinta: '',
    kulmiye: '',
    waddani: '',
    ucid: '',
    kaah: '',
    hilaac: '',
    horseed: '',
    barwaaqo: '',
    rajo: '',
    codadkaLumay: '',
    codadkaKhaldamay: '',
  });

  const handleSubmit = async () => {};
  return (
    <div className="justify-start space-y-3 w-full">
      <h2 className="text-2xl font-semibold text-slate-600">
        Natiijada Urarada:
      </h2>
      <AddParties form={form} setForm={setForm} handleSubmit={handleSubmit} />
      <div className="bg-white shadow-md rounded-md">
        <PartiesGraph />
      </div>
    </div>
  );
};

export default AllParties;
