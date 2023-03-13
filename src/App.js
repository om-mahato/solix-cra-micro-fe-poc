import './App.css';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'id', headerName: 'Id', width: 130 },
  { field: 'name', headerName: 'Name', width: 130 },
  { field: 'classes', headerName: 'Class', width: 130 },
  {
    field: 'rollNo',
    headerName: 'Roll No',
    type: 'number',
    width: 90,
  },
];

function App({counterApp, students, incrementContainerCounter}) {
  return (
    <div className="App">
      <div className='container'>
        <div className='mb-3'>
          MFE
        </div>
        {console.log('students', students.map((i, idx) => ({...i, id: idx+1})))}
        <div style={{ height: 400, width: '100%' }}>
          <DataGrid
            rows={students.map((i, idx) => ({...i, id: idx+1}))}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5]}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
