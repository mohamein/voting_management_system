/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Input } from './ui/input';
import { Button } from './ui/button';
import { createStation } from '@/lib/api/places.api';

const AddStation = ({ form, setForm, loading, setLoading }) => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const stationForm = {
        gobolka: form.gobolka,
        degmada: form.degmada,
        magacGoobta: form.magacGoobta,
        LrGoobta: form.lrGoobta,
        LrGoobtaCodbixinta: form.lrGoobtaCodbixinta,
        muraaqibka: form.muraaqibka,
      };
      const resp = await createStation(stationForm);
      console.log(resp);
      setLoading(false);
      setForm('');
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  };

  const handleTextChange = (e) => {
    const { value, name } = e.target;

    setForm({
      ...form,
      [name]: value,
    });
  };
  return (
    <div>
      <form onSubmit={handleSubmit} className="space-y-3 ">
        <div className="w-[400px] flex flex-col gap-2">
          <label htmlFor="gobolka">Gobolka</label>
          <Input
            type="text"
            name="gobolka"
            placeholder="Magaca Gobolka"
            className="w-full"
            value={form.gobolka}
            onChange={(e) => handleTextChange(e)}
          />
        </div>
        <div className="w-[400px] flex flex-col gap-2">
          <label htmlFor="degmada">Degmada</label>
          <Input
            type="text"
            name="degmada"
            placeholder="Magaca Degmada"
            className="w-full"
            value={form.degmada}
            onChange={(e) => handleTextChange(e)}
          />
        </div>
        <div className="w-[400px] flex flex-col gap-2">
          <label htmlFor="magacGoobta">Magac Goobta</label>
          <Input
            type="text"
            name="magacGoobta"
            placeholder="Magac Goobta"
            className="w-full"
            value={form.magacGoobta}
            onChange={(e) => handleTextChange(e)}
          />
        </div>
        <div className="w-[400px] flex flex-col gap-2">
          <label htmlFor="lrGoobta">LrGoobta</label>
          <Input
            type="text"
            name="lrGoobta"
            placeholder="LrGoobta"
            className="w-full"
            value={form.lrGoobta}
            onChange={(e) => handleTextChange(e)}
          />
        </div>
        <div className="w-[400px] flex flex-col gap-2">
          <label htmlFor="lrGoobtaCodbixinta">LrGoobtaCodbixinta:</label>
          <Input
            type="text"
            name="lrGoobtaCodbixinta"
            placeholder="LrGoobtaCodbixinta"
            className="w-full"
            value={form.lrGoobtaCodbixinta}
            onChange={(e) => handleTextChange(e)}
          />
        </div>
        <div className="w-[400px] flex flex-col gap-2">
          <label htmlFor="muraaqibka">Muraaqibka:</label>
          <Input
            type="text"
            name="muraaqibka"
            placeholder="Magaca Muraaqibka"
            className="w-full"
            value={form.muraaqibka}
            onChange={(e) => handleTextChange(e)}
          />
        </div>

        <Button
          type="submit"
          className="bg-red-500 hover:bg-red-600 rounded-sm text-white font-semibold "
        >
          {loading ? 'Submitting...' : 'Submit'}
        </Button>
      </form>
    </div>
  );
};

export default AddStation;
