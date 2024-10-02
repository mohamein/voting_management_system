import AddStation from '@/components/AddStation';
import { useState } from 'react';

const CreateStation = () => {
  const [form, setForm] = useState({
    gobolka: '',
    degmada: '',
    magacGoobta: '',
    lrGoobta: '',
    lrGoobtaCodbixinta: '',
    muraaqibka: '',
  });
  const [loading, setLoading] = useState(false);

  return (
    <div>
      <div>
        <h3 className="text-xl text-gray-600 font-semibold">
          Diwaan gelin Xarun Cusub
        </h3>
        <p className="text-sm text-gray-500 font-medium">
          si aad u diwaan geliso xarun cusub fadlan buuxi liiska diwan gelinta.
        </p>
      </div>

      <AddStation
        form={form}
        setForm={setForm}
        loading={loading}
        setLoading={setLoading}
      />
    </div>
  );
};

export default CreateStation;
