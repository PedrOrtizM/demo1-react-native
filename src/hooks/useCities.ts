import { useQuery } from '@tanstack/react-query';
import { CityService } from '@services';
import { ICity } from 'src/types/ICity';


export const useCities = () => {

  const getCities = useQuery<ICity[]>({
    queryKey: ['cities'],
    queryFn: CityService.getCities
  })


  const getCitiesBy = (searchText: string, param: keyof ICity = 'name') => {
    return getCities.data.filter((city) =>
      city[param].toLocaleLowerCase().trim().includes(searchText.toLocaleLowerCase().trim())
    );
  }


  return { getCities, getCitiesBy }
};
