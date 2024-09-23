/* eslint-disable react/prop-types */
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { Input } from './ui/input';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
const AddParties = ({ form, setForm, handleSubmit }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  return (
    <Dialog>
      <DialogTrigger>
        <Button className="bg-red-500 text-white hover:bg-red-600">
          Create Parties Vote
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Fill out the form to create a user.</DialogTitle>
        </DialogHeader>

        <Card>
          <CardContent>
            <form className="space-y-2">
              <div className="rounded-md flex flex-col gap-2">
                <label htmlFor="magalada">Magalada:</label>
                <Input
                  name="magalada"
                  type="text"
                  className="bg-transparent w-full h-full focus:outline-none "
                  placeholder="Enter Here...."
                  value={form.magalada}
                  onChange={handleChange}
                />
              </div>
              <div className="rounded-md flex flex-col gap-2">
                <label htmlFor="goobtaCodbixinta">Goobta Codbixinta:</label>
                <Input
                  name="goobtaCodbixinta"
                  type="text"
                  className="bg-transparent w-full h-full focus:outline-none "
                  placeholder="Enter Here...."
                  value={form.goobtaCodbixinta}
                  onChange={handleChange}
                />
              </div>
              <div className="rounded-md flex flex-col gap-2">
                <label htmlFor="kulmiye">Kulmiye:</label>
                <Input
                  name="kulmiye"
                  type="text"
                  className="bg-transparent w-full h-full focus:outline-none "
                  placeholder="Enter Here...."
                  value={form.kulmiye}
                  onChange={handleChange}
                />
              </div>
              <div className="rounded-md flex flex-col gap-2">
                <label htmlFor="Waddani">Waddani:</label>
                <Input
                  name="waddani"
                  type="text"
                  className="bg-transparent w-full h-full focus:outline-none "
                  placeholder="Enter Here...."
                  value={form.waddani}
                  onChange={handleChange}
                />
              </div>
              <div className="rounded-md flex flex-col gap-2">
                <label htmlFor="ucid">Ucid:</label>
                <Input
                  name="ucid"
                  type="text"
                  className="bg-transparent w-full h-full focus:outline-none "
                  placeholder="Enter Here...."
                  value={form.ucid}
                  onChange={handleChange}
                />
              </div>
              <div className="rounded-md flex flex-col gap-2">
                <label htmlFor="kaah">Kaah:</label>
                <Input
                  name="kaah"
                  type="kaah"
                  className="bg-transparent w-full h-full focus:outline-none "
                  placeholder="Enter Here...."
                  value={form.kaah}
                  onChange={handleChange}
                />
              </div>
              <div className="rounded-md flex flex-col gap-2">
                <label htmlFor="hilaac">Hilaac:</label>
                <Input
                  name="hilaac"
                  type="hilaac"
                  className="bg-transparent w-full h-full focus:outline-none "
                  placeholder="Enter Here...."
                  value={form.hilaac}
                  onChange={handleChange}
                />
              </div>
              <div className="rounded-md flex flex-col gap-2">
                <label htmlFor="horseed">Horseed:</label>
                <Input
                  name="horseed"
                  type="horseed"
                  className="bg-transparent w-full h-full focus:outline-none "
                  placeholder="Enter Here...."
                  value={form.horseed}
                  onChange={handleChange}
                />
              </div>
              <div className="rounded-md flex flex-col gap-2">
                <label htmlFor="barwaaqo">Barwaaqo:</label>
                <Input
                  name="barwaaqo"
                  type="barwaaqo"
                  className="bg-transparent w-full h-full focus:outline-none "
                  placeholder="Enter Here...."
                  value={form.barwaaqo}
                  onChange={handleChange}
                />
              </div>
              <div className="rounded-md flex flex-col gap-2">
                <label htmlFor="rajo">Rajo:</label>
                <Input
                  name="rajo"
                  type="rajo"
                  className="bg-transparent w-full h-full focus:outline-none "
                  placeholder="Enter Here...."
                  value={form.rajo}
                  onChange={handleChange}
                />
              </div>
              <div className="rounded-md flex flex-col gap-2">
                <label htmlFor="codadkaLumay">Codadka Lumay:</label>
                <Input
                  name="codadkaLumay"
                  type="codadkaLumay"
                  className="bg-transparent w-full h-full focus:outline-none "
                  placeholder="Enter Here...."
                  value={form.codadkaLumay}
                  onChange={handleChange}
                />
              </div>
              <div className="rounded-md flex flex-col gap-2">
                <label htmlFor="codadkaKhaldamay">Codadka Khaldamay:</label>
                <Input
                  name="codadkaKhaldamay"
                  type="codadkaKhaldamay"
                  className="bg-transparent w-full h-full focus:outline-none "
                  placeholder="Enter Here...."
                  value={form.codadkaKhaldamay}
                  onChange={handleChange}
                />
              </div>
            </form>

            <div className="flex justify-end items-center mt-5">
              <Button
                onClick={handleSubmit}
                className="bg-orange-400 hover:bg-orange-500"
              >
                Submit
              </Button>
            </div>
          </CardContent>
        </Card>
      </DialogContent>
    </Dialog>
  );
};

export default AddParties;
