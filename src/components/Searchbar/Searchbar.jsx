import { SearchbarContainer,SearchForm,SearchFormButton,SearchFormButtonLabel,SearchFormInput } from './Searchbar.styled';

const Searchbar = () => (
  <>
    <SearchbarContainer>
      <SearchForm>
        <SearchFormButton type="submit">
          <SearchFormButtonLabel>Search</SearchFormButtonLabel>
        </SearchFormButton>

        <SearchFormInput
          
          type="text"
          autocomplete="off"
          autofocus
          placeholder="Search images and photos"
        />
      </SearchForm>
    </SearchbarContainer>
  </>
);

export default Searchbar;
