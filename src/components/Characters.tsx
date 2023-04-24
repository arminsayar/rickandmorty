import '../App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, LinearProgress } from '@mui/material';
import Paginations from './Pagination';


function Characters() {
    const [data, setData] = useState([]);
    const [pages, setPages] = useState();
    const [pageNumber, setPage] = useState(1);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = () => {
            axios.get(`https://rickandmortyapi.com/api/character?page=${pageNumber}`)
                .then((res: any, err: void) => {
                    setData(res.data.results)
                    setPages(res.data.info.pages)
                    setLoading(false);
                })
        }
        fetchData()
    }, [pageNumber])
    return (
        <>
            {
                loading &&
                <LinearProgress />
            }
            <div className='cards-body'>
                {data.map((characters: any) => (
                    <Card sx={{ maxWidth: 250 }} className='cards'>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                loading='lazy'
                                height="250"
                                sx={{ maxWidth: 250 }}
                                image={characters.image}
                                alt={characters.name}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    {characters.name}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Is {characters.status}
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                ))}
            </div>
            {!loading &&
                <Paginations
                    pages={pages}
                    activePage={pageNumber}
                    setPage={setPage}
                />}
        </>
    );
}

export default Characters;
