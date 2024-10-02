/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { createVote } from '@/lib/api/vote.api';

const AddParties = ({ form, setForm }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleFile = (e) => {
    const file = e.target.files[0];
    setSelectedImage(file);
    console.log(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    try {
      const vote = {
        magalada: form.magalada,
        goobtaCodka: form.goobtaCodka,
        kulmiye: form.kulmiye,
        waddani: form.waddani,
        ucid: form.ucid,
        kaah: form.kaah,
        hilaac: form.hilaac,
        horseed: form.horseed,
        barwaaqo: form.barwaaqo,
        rajo: form.rajo,
        shacabka: form.shacabka,
        taloWadaag: form.taloWadaag,

        aanAnSixin: form.aanAnSixin,
        Ansaxay: form.Ansaxay,
        description: form.description,
        imageUri: selectedImage,
      };
      const resp = await createVote(vote);
      console.log(resp);
      setLoading(false);
      setForm('');
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  };

  console.log(selectedImage);
  return (
    <div>
      <form onSubmit={handleSubmit} className="flex gap-6">
        <div>
          <div className="w-[400px] flex gap-2">
            <div className="w-full flex flex-col gap-2 items-start">
              <label htmlFor="magalada">Magalada:</label>
              <Input
                name="magalada"
                type="text"
                placeholder="Enter Location here..."
                value={form.magalada}
                onChange={(e) => handleInputChange(e)}
              />
            </div>
            <div className="w-full flex flex-col gap-2 items-start">
              <label htmlFor="goobtaCodka">Goobta Codbixinta:</label>
              <Input
                name="goobtaCodka"
                type="text"
                placeholder="Enter District Here..."
                value={form.goobtaCodka}
                onChange={(e) => handleInputChange(e)}
              />
            </div>
          </div>
          <div className="w-[400px] flex gap-2">
            <div className="w-full flex flex-col gap-2 items-start">
              <label htmlFor="kulmiye">Kulmiye:</label>
              <Input
                name="kulmiye"
                type="text"
                placeholder="Enter Kulmiye here..."
                value={form.kulmiye}
                onChange={(e) => handleInputChange(e)}
              />
            </div>
            <div className="w-full flex flex-col gap-2 items-start">
              <label htmlFor="waddani">Waddani:</label>
              <Input
                name="waddani"
                type="text"
                placeholder="Enter Waddani Here..."
                value={form.waddani}
                onChange={(e) => handleInputChange(e)}
              />
            </div>
          </div>
          <div className="w-[400px] flex gap-2">
            <div className="w-full flex flex-col gap-2 items-start">
              <label htmlFor="kaah">Kaah:</label>
              <Input
                name="kaah"
                type="text"
                placeholder="Enter Kaah here..."
                value={form.kaah}
                onChange={(e) => handleInputChange(e)}
              />
            </div>
            <div className="w-full flex flex-col gap-2 items-start">
              <label htmlFor="ucid">Ucid:</label>
              <Input
                name="ucid"
                type="text"
                placeholder="Enter Ucid Here..."
                value={form.ucid}
                onChange={(e) => handleInputChange(e)}
              />
            </div>
          </div>
          <div className="w-[400px] flex gap-2">
            <div className="w-full flex flex-col gap-2 items-start">
              <label htmlFor="hilaac">Hilaac:</label>
              <Input
                name="hilaac"
                type="text"
                placeholder="Enter Hilaac here..."
                value={form.hilaac}
                onChange={(e) => handleInputChange(e)}
              />
            </div>
            <div className="w-full flex flex-col gap-2 items-start">
              <label htmlFor="horseed">Horseed:</label>
              <Input
                name="horseed"
                type="text"
                placeholder="Enter Horseed Here..."
                value={form.horseed}
                onChange={(e) => handleInputChange(e)}
              />
            </div>
          </div>
          <div className="w-[400px] flex gap-2">
            <div className="w-full flex flex-col gap-2 items-start">
              <label htmlFor="taloWadaag">Talo Wadaag:</label>
              <Input
                name="taloWadaag"
                type="text"
                placeholder="Enter Talo Wadaag here..."
                value={form.taloWadaag}
                onChange={(e) => handleInputChange(e)}
              />
            </div>
            <div className="w-full flex flex-col gap-2 items-start">
              <label htmlFor="rajo">Rajo:</label>
              <Input
                name="rajo"
                type="text"
                placeholder="Enter Rajo Here..."
                value={form.rajo}
                onChange={(e) => handleInputChange(e)}
              />
            </div>
          </div>
          <div className="w-[400px] flex gap-2">
            <div className="w-full flex flex-col gap-2 items-start">
              <label htmlFor="barwaaqo">Barwaaqo:</label>
              <Input
                name="barwaaqo"
                type="text"
                placeholder="Enter Barwaaqo here..."
                value={form.barwaaqo}
                onChange={(e) => handleInputChange(e)}
              />
            </div>
            <div className="w-full flex flex-col gap-2 items-start">
              <label htmlFor="shacabka">Shacabka:</label>
              <Input
                name="shacabka"
                type="text"
                placeholder="Enter Shacabka Here..."
                value={form.shacabka}
                onChange={(e) => handleInputChange(e)}
              />
            </div>
          </div>
        </div>

        <div>
          <div className="w-[400px] flex mb-4 gap-4">
            <div className="flex flex-col w-full gap-2">
              <label htmlFor="aanAnSixin">Codadka Aan Ansixin:</label>
              <Input
                type="text"
                name="aanAnSixin"
                placeholder="Codadka Aan Ansixin"
                value={form.aanAnSixin}
                onChange={(e) => handleInputChange(e)}
              />
            </div>
            <div className="flex flex-col w-full gap-2">
              <label htmlFor="Ansaxay">Codadka Ansaxay:</label>
              <Input
                type="text"
                name="Ansaxay"
                placeholder="Codadka Ansaxay"
                value={form.Ansaxay}
                onChange={(e) => handleInputChange(e)}
              />
            </div>
          </div>

          <div className="w-full flex flex-col mb-4">
            <label htmlFor="file">Upload Image:</label>
            <Input
              name="file"
              type="file"
              accepts="image/*"
              onChange={(e) => handleFile(e)}
            />
            {selectedImage && (
              <div className="w-64 h-full rounded-md mt-3">
                <img
                  src={selectedImage}
                  alt="image"
                  className="w-full object-cover"
                />
              </div>
            )}
          </div>

          <div className="w-full flex flex-col mb-4">
            <label htmlFor="description">Description:</label>
            <Input
              name="description"
              type="text"
              placeholder="Enter Description Here.."
              value={form.description}
              onChange={(e) => handleInputChange(e)}
            />
          </div>

          <Button
            type="submit"
            disabled={loading}
            className="bg-red-500 w-full text-white font-semibold rounded-sm hover:bg-red-600"
          >
            {loading ? 'Submitting...' : 'Submit'}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default AddParties;
