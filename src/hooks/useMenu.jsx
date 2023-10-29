import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const useMenu = () => {
    const {refetch, data: menu = [], isLoading: loading} = useQuery({
        queryKey: ['menu'],
        queryFn: async () => {
            const res = await axios('http://localhost:5000/menu')
            return res.data;
        }
    });
    return [menu, loading, refetch]
};

export default useMenu;