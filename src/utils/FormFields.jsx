import DropDownMenu from '../components/createEmployee/DropDownMenu';
import TextField from '../components/createEmployee/TextField';

const fields = [
    {
        type: 'text',
        id: 'name',
        name: 'name',
        required: 'Name',
        text: 'Employee Name',
        Component: TextField,
    },
    {
        type: 'email',
        id: 'email',
        name: 'email',
        required: 'Email',
        text: 'Employee Email',
        Component: TextField,
    },
    // {
    // 	type: "date",
    // 	id: "joiningDate",
    // 	name: "joining-date",
    // 	text: "Join Date",
    // 	Component: TextField,
    // },
    {
        id: 'role',
        name: 'role',
        options: [
            { value: 'UI', label: 'UI' },
            { value: 'UX', label: 'UX' },
            { value: 'DEVELOPER', label: 'DEVELOPER' },
            { value: 'TESTER', label: 'TESTER' },
            { value: 'HR', label: 'HR' },
            { value: 'ADMIN', label: 'ADMIN' },
        ],
        Component: DropDownMenu,
    },
    {
        id: 'status',
        name: 'Status',
        options: [
            { value: 'Active', label: 'Active' },
            { value: 'In Active', label: 'In Active' },
            { value: 'On Leave', label: 'On Leave' },
        ],
        Component: DropDownMenu,
    },
    {
        type: 'text',
        id: 'experience',
        name: 'experience',
        required: 'Experience',
        text: 'Experience',
        Component: TextField,
    },
    {
        id: 'department',
        name: 'Department',
        options: [
            { value: 'DEV', label: 'Product Development' },
            { value: 'IT', label: 'Information Technology' },
            { value: 'HR', label: 'Human Resources' },
            { value: 'QA', label: 'Quality Assurance' },
        ],
        Component: DropDownMenu,
    },
    {
        type: 'text',
        id: 'address',
        name: 'address',
        required: 'Address',
        text: 'Address',
        Component: TextField,
    },
    {
        type: 'text',
        id: 'pincode',
        name: 'pincode',
        required: 'Pincode',
        text: 'Pincode',
        Component: TextField,
    },
];

export default fields;
