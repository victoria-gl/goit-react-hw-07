import ContactList from "../ContactList/ContactList";
import SearchBar from "../SearchBox/SearchBox";
import ConctactForm from "../ContactForm/ContactForm";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { Loader } from "../Loader/Loader";
import { getLoading } from "../../redux/selector";
import { fetchContacts } from "../../redux/contactsOps";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  const isLoading = useSelector(getLoading);
  return (
    <>
      <h1>Phonebook</h1>
      <ConctactForm />
      <SearchBar />
      <ContactList />
      {isLoading && <Loader />}
    </>
  );
};
export default App;
