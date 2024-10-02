import AddParties from '@/components/AddParties';
import { useState } from 'react';

const CreateParties = () => {
  const [form, setForm] = useState({
    magalada: '',
    goobtaCodka: '',
    kulmiye: '',
    waddani: '',
    kaah: '',
    ucid: '',
    horseed: '',
    hilaac: '',
    barwaaqo: '',
    rajo: '',
    taloWadaag: '',
    shacabka: '',
    aanAnSixin: '',
    Ansaxay: '',
    description: '',
  });

  return (
    <div className="flex flex-col gap-4">
      <div>
        <h3 className="text-xl text-gray-600 font-semibold">
          Diwaan gelin cod
        </h3>
        <p className="text-sm text-gray-500 font-medium">
          si aad u diwaan geliso cod fadlan buuxi liiska diwan gelinta.
        </p>
      </div>
      <AddParties form={form} setForm={setForm} />
    </div>
  );
};

export default CreateParties;
