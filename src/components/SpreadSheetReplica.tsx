import React from 'react';
import { TiFlowMerge } from "react-icons/ti";
import { FaRegShareSquare } from "react-icons/fa";
import { 
  Search, 
  Bell, 
  User, 
  ChevronsRight, 
  ChevronRight,
  EyeOff, 
  Link2,
  ArrowUpDown, 
  Filter, 
  Grid3X3, 
  Download, 
  Upload, 
  Plus,
  RefreshCw,
  Calendar,
  ChevronDown,
  CircleChevronDown,
  Globe,
} from 'lucide-react';

const SpreadsheetReplica: React.FC = () => {
  const handleButtonClick = (action: string) => {
    console.log(`${action} button clicked`);
  };

  const handleCellClick = (row: number, column: string, value: string) => {
    console.log(`Cell clicked - Row: ${row}, Column: ${column}, Value: ${value}`);
  };

  const data = [
    {
      id: 1,
      jobRequest: "Launch social media campaign for pro...",
      submitted: "15-11-2024",
      status: "In-process",
      submitter: "Aisha Patel",
      url: "www.aishapatel...",
      assigned: "Sophie Choudhury",
      priority: "Medium",
      dueDate: "20-11-2024",
      estValue: "6,200,000"
    },
    {
      id: 2,
      jobRequest: "Update press kit for company redesign",
      submitted: "28-10-2024",
      status: "Need to start",
      submitter: "Irfan Khan",
      url: "www.irfankhanp...",
      assigned: "Tejas Pandey",
      priority: "High",
      dueDate: "30-10-2024",
      estValue: "3,500,000"
    },
    {
      id: 3,
      jobRequest: "Finalize user testing feedback for app...",
      submitted: "05-12-2024",
      status: "In-process",
      submitter: "Mark Johnson",
      url: "www.markjohns...",
      assigned: "Rachel Lee",
      priority: "Medium",
      dueDate: "10-12-2024",
      estValue: "4,750,000"
    },
    {
      id: 4,
      jobRequest: "Design new features for the website",
      submitted: "10-01-2025",
      status: "Complete",
      submitter: "Emily Green",
      url: "www.emilygreen...",
      assigned: "Tom Wright",
      priority: "Low",
      dueDate: "15-01-2025",
      estValue: "5,900,000"
    },
    {
      id: 5,
      jobRequest: "Prepare financial report for Q4",
      submitted: "25-01-2025",
      status: "Blocked",
      submitter: "Jessica Brown",
      url: "www.jessicabro...",
      assigned: "Kevin Smith",
      priority: "Low",
      dueDate: "30-01-2025",
      estValue: "2,800,000"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'In-process':
        return 'bg-yellow-100 text-yellow-800 border-none';
      case 'Need to start':
        return 'bg-[#E2E8F0] text-[#475569] border-none';
      case 'Complete':
        return 'bg-green-100 text-green-700 border-none';
      case 'Blocked':
        return 'bg-red-100 text-red-700 border-none';
      default:
        return 'bg-gray-100 text-gray-700 border-none';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'High':
        return 'text-red-500 font-medium';
      case 'Medium':
        return 'text-orange-500 font-medium';
      case 'Low':
        return 'text-blue-500 font-medium';
      default:
        return 'text-gray-500';
    }
  };

  return (
    <div className="min-h-screen w-full bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gray-600 rounded flex items-center justify-center">
              <Grid3X3 className="w-4 h-4 text-white" />
            </div>
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <span>Workspace</span>
              <ChevronRight className="w-4 h-4" />
              <span>Folder 2</span>
              <ChevronRight className="w-4 h-4" />
              <span className="font-medium text-gray-900">Spreadsheet 3</span>
              <button className="ml-2" onClick={() => handleButtonClick('More options')}>
                <span className="text-gray-400">•••</span>
              </button>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search within sheet"
                className="pl-10 pr-4 py-2  bg-gray-50  rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                onClick={() => handleButtonClick('Search')}
              />
            </div>
            <button 
              className="relative p-2 text-gray-600 hover:text-gray-900"
              onClick={() => handleButtonClick('Notifications')}
            >
              <Bell className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-blue-500 rounded-r-xl rounded-l-xl text-xs text-white flex items-center justify-center">2</span>
            </button>
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
                <span className="text-white text-sm font-medium">JD</span>
              </div>
              <div className="text-sm">
                <div className="font-medium text-gray-900">John Doe</div>
                <div className="text-gray-500 text-xs">john_doe</div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Toolbar */}
      <div className="bg-white border-b border-gray-200 px-4 ">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <button 
              className="flex items-center space-x-2 text-sm text-black hover:text-gray-900"
              onClick={() => handleButtonClick('Tool bar')}
            >
              <span>Tool bar</span>
              <ChevronsRight className="w-4 h-4" />
            </button>
            
            
            <div className="flex items-center space-x-3 py-2">
              <button 
                className="flex items-center space-x-2 px-3 py-2 text-sm text-black hover:bg-gray-100 rounded"
                onClick={() => handleButtonClick('Hide fields')}
              >
                <EyeOff className="w-4 h-4" />
                <span>Hide fields</span>
              </button>
              
              <button 
                className="flex items-center space-x-2 px-3 py-2 text-sm text-black hover:bg-gray-100 rounded"
                onClick={() => handleButtonClick('Sort')}
              >
                <ArrowUpDown className="w-4 h-4" />
                <span>Sort</span>
              </button>
              
              <button 
                className="flex items-center space-x-2 px-3 py-2 text-sm text-black hover:bg-gray-100 rounded"
                onClick={() => handleButtonClick('Filter')}
              >
                <Filter className="w-4 h-4" />
                <span>Filter</span>
              </button>
              
              <button 
                className="flex items-center space-x-2 px-3 py-2 text-sm text-black hover:bg-gray-100 rounded"
                onClick={() => handleButtonClick('Cell view')}
              >
                <Grid3X3 className="w-4 h-4" />
                <span>Cell view</span>
              </button>
            </div>
          </div>
          
          <div className="flex items-center space-x-3">
            <button 
              className="flex items-center space-x-2 px-3 py-2 border border-gray-300 text-sm text-gray-600 hover:bg-gray-100 rounded"
              onClick={() => handleButtonClick('Import')}
            >
              <Upload className="w-4 h-4" />
              <span>Import</span>
            </button>
            
            <button 
              className="flex items-center space-x-2 px-3 py-2 border border-gray-300 text-sm text-gray-600 hover:bg-gray-100 rounded"
              onClick={() => handleButtonClick('Export')}
            >
              <Download className="w-4 h-4" />
              <span>Export</span>
            </button>
            
            <button 
              className="flex items-center space-x-2 px-3 py-2 text-sm border border-gray-300 text-gray-600 hover:bg-gray-100 rounded"
              onClick={() => handleButtonClick('Share')}
            >
              <FaRegShareSquare className="w-4 h-4" />
              <span>Share</span>
            </button>
            
            <button 
              className="flex items-center space-x-2 px-3 py-2 bg-[#4B6A4F] text-white rounded hover:bg-green-700"
              onClick={() => handleButtonClick('New Action')}
            >
              <TiFlowMerge className="w-4 h-4" />
              <span>New Action</span>
            </button>
          </div>
        </div>
      </div>

      {/* Action Tabs */}

     
      <div className="bg-white px-4 border-b border-gray-200">
        
        <div className="flex space-x-4">
            <tbody className='px-8 '>
              {/* Q3 Financial Overview Section Header */}
              <tr className=" bg-gray-100 border-b border-gray-200">
                <td colSpan={10} className="px-4 py-3">
                  <div 
                    className="flex w-[721px] items-center space-x-2 text-gray-700 cursor-pointer"
                    onClick={() => handleButtonClick('Q3 Financial Overview')}
                  >
                    <div className='flex p-1 gap-1 bg-gray-50'>
                    <Link2 className="w-4 h-4 text-blue-700" />
                    <span className="font-medium text-sm">Q3 Financial Overview</span>
                    </div>
                    <RefreshCw className='w-4 h-4 text-red-500'/>
                  </div>
                </td>
              </tr>
            </tbody>
            <div className='flex px-27 '>
          <button 
            className="flex items-center space-x-2 px-[40px] py-2 bg-[#D2E0D4] text-gray-600 text-sm"
            onClick={() => handleButtonClick('ABC')}
          >
            <TiFlowMerge className='w-4 h-4' />
            <span>ABC</span>
            <span className="text-gray-400">•••</span>
          </button>
          
          <button 
            className="flex items-center space-x-2 px-3 w-[208px] py-2 bg-[#DCCFFC] text-purple-700 text-sm"
            onClick={() => handleButtonClick('Answer a question')}
          >
            <TiFlowMerge className='w-4 h-4 text-white' />
            <span>Answer a question</span>
            <span className="text-gray-400">•••</span>
          </button>
          
          <button 
            className="flex items-center space-x-2 px-[5px] py-2 bg-[#FAC2AF] text-orange-700 text-sm"
            onClick={() => handleButtonClick('Extract')}
          >
            <TiFlowMerge className='w-4 h-4 text-white' />
            <span>Extract</span>
            <span className="text-gray-400">•••</span>
          </button>
          
          
          <button 
            className="p-2 pl-10 w-[100px] bg-gray-100 text-gray-400 hover:text-gray-600"
            onClick={() => handleButtonClick('Add new tab')}
          >
            <Plus className="w-4 h-5 text-black" />
          </button>
          </div>
        </div>
      </div>

      {/* Spreadsheet */}
      <div className="bg-white">
        <div className="overflow-x-auto">
          <table className="w-full">
            
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="w-12 px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-r border-gray-200">
                  #
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider min-w-30 border-r border-gray-200">
                  <div className="flex items-center space-x-2">
                    <Grid3X3 className="w-4 h-4" />
                    <span>Job Request</span>
                    <ChevronDown className="text-[#A3ACA3] w-4 h-4" />
                  </div>
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-r border-gray-200">
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4" />
                    <span>Submitted</span>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-r border-gray-200">
                  <div className="flex items-center space-x-2">
                     <CircleChevronDown className='w-4 h-4' />
                    <span>Status</span>
                    <ChevronDown className="w-4 h-4" />

                  </div>
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-r border-gray-200">
                  <div className="flex items-center space-x-2">
                    <User className="w-4 h-4" />
                    <span>Submitter</span>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-r border-gray-200">
                  <div className="flex items-center space-x-2">
                    <Globe className="w-4 h-4" />
                    <span>URL</span>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium bg-[#E8F0E9] text-gray-500 uppercase tracking-wider border-r border-gray-200">
                  <div className="flex items-center space-x-2">
                    <User className="w-4 h-4" />
                    <span>Assigned</span>
                  </div>
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium bg-[#EAE3FC] text-gray-500 uppercase tracking-wider border-r border-gray-200">
                  Priority
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium bg-[#EAE3FC] text-gray-500 uppercase tracking-wider border-r border-gray-200">
                  Due Date
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium bg-[#FFE9E0] text-gray-500 uppercase tracking-wider">
                  Est. Value
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {data.map((row) => (
                <tr key={row.id} className="hover:bg-gray-50">
                  <td className="px-4 py-4 text-sm text-gray-900 font-medium border-r border-gray-200">
                    {row.id}
                  </td>
                  <td 
                    className="px-4 py-4 text-sm text-gray-900 cursor-pointer border-r border-gray-200"
                    onClick={() => handleCellClick(row.id, 'Job Request', row.jobRequest)}
                  >
                    {row.jobRequest}
                  </td>
                  <td 
                    className="px-4 py-4 text-sm text-gray-600 cursor-pointer border-r border-gray-200"
                    onClick={() => handleCellClick(row.id, 'Submitted', row.submitted)}
                  >
                    {row.submitted}
                  </td>
                  <td className="px-4 py-4 border-r border-gray-200">
                    <span 
                      className={`inline-flex px-2 py-1 text-xs font-medium rounded-full border cursor-pointer ${getStatusColor(row.status)}`}
                      onClick={() => handleCellClick(row.id, 'Status', row.status)}
                    >
                      {row.status}
                    </span>
                  </td>
                  <td 
                    className="px-4 py-4 text-sm text-gray-900 cursor-pointer border-r border-gray-200"
                    onClick={() => handleCellClick(row.id, 'Submitter', row.submitter)}
                  >
                    {row.submitter}
                  </td>
                  <td className="px-4 py-4 border-r border-gray-200">
                    <a 
                      href="#" 
                      className="text-sm text-blue-600 hover:text-blue-800 underline cursor-pointer"
                      onClick={(e) => {
                        e.preventDefault();
                        handleCellClick(row.id, 'URL', row.url);
                      }}
                    >
                      {row.url}
                    </a>
                  </td>
                  <td 
                    className="px-4 py-4 text-sm text-gray-900 cursor-pointer border-r border-gray-200"
                    onClick={() => handleCellClick(row.id, 'Assigned', row.assigned)}
                  >
                    {row.assigned}
                  </td>
                  <td className="px-4 py-4 border-r border-gray-200">
                    <span 
                      className={`text-sm cursor-pointer ${getPriorityColor(row.priority)}`}
                      onClick={() => handleCellClick(row.id, 'Priority', row.priority)}
                    >
                      {row.priority}
                    </span>
                  </td>
                  <td 
                    className="px-4 py-4 text-sm text-gray-600 cursor-pointer border-r border-gray-200"
                    onClick={() => handleCellClick(row.id, 'Due Date', row.dueDate)}
                  >
                    {row.dueDate}
                  </td>
                  <td 
                    className="px-2 py-4 text-left text-sm text-gray-900 font-medium cursor-pointer"
                    onClick={() => handleCellClick(row.id, 'Est. Value', row.estValue)}
                  >
                    {row.estValue} <span className='text-gray-400'>₹</span>
                  </td>
                  <td 
  className="px-4 w-[100px] border-l border-r border-dashed border-gray-300 py-4 text-sm text-gray-900 font-medium cursor-pointer"
>
</td>



                </tr>
              ))}
              
              {/* Empty rows */}
              {[6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17].map((num) => (
                <tr key={num} className="hover:bg-gray-50">
                  <td className="px-4 py-4 text-sm text-gray-400 border-r border-gray-200">
                    {num}
                  </td>
                  <td className="px-4 py-4 border-r border-gray-200"></td>
                  <td className="px-4 py-4 border-r border-gray-200"></td>
                  <td className="px-4 py-4 border-r border-gray-200"></td>
                  <td className="px-4 py-4 border-r border-gray-200"></td>
                  <td className="px-4 py-4 border-r border-gray-200"></td>
                  <td className="px-4 py-4 border-r border-gray-200"></td>
                  <td className="px-4 py-4 border-r border-gray-200"></td>
                  <td className="px-4 py-4 border-r border-gray-200"></td>
                  <td 
  className="px-4 w-[100px] border-l border-r border-dashed border-gray-300 py-4 text-sm text-gray-900 font-medium cursor-pointer"
>
</td>


                </tr>
              ))}
              
              {/* Row 8 with the selected cell box */}
              
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default SpreadsheetReplica;