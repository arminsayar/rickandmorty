import { Pagination } from '@mui/material'
interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}
function Paginations({ pages, activePage, setPage }: any) {
    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setPage(newValue);
    };
    return (
        <>
            <div style={{ display: 'flex', justifyContent: 'center', margin: '20px 0 20px 0' }}>
                <Pagination count={pages} onChange={handleChange} page={activePage} variant="outlined" color="primary" />

            </div>
        </>
    );
}

export default Paginations;
