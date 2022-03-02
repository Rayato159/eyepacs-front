import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom' 

// Icons
import { BiErrorCircle } from 'react-icons/bi'

// Services
import {
    updateEyeSide,
    updateEyeStatus,
} from '../../services/eyeServices'

import {
    // Update
    updateTable1,
    updateTable2,
    updateTable3,
    updateTable4,
    updateTable5,
    updateTable6,
    updateTable7,
    updateTable8,
    updateTable9,
    updateTable10,
    updateTable11,
    updateTable12,
    updateTable13,
    // Delete
    deleteAllTable,
} from '../../services/tableServices'

export const EyeFormUpdate = ({ left, eye_photo_id }) => {

    const navigate = useNavigate()
    const eyeside = left? 'LEFT': 'RIGHT'

    // General state
    const [isPending, setIsPending] = useState(false)
    const [error, setError] = useState("")
    const [isCompleted, setIsCompleted] = useState(false)

    // Table 1 State
    const [table1_1, setTable1_1] = useState(false)
    const [table1_2, setTable1_2] = useState(false)

    // Table 2 State
    const [table2_1, setTable2_1] = useState(false)
    const [table2_2, setTable2_2] = useState(false)

    // Table 3 State
    const [table3_1, setTable3_1] = useState(false)
    const [table3_2, setTable3_2] = useState(false)

    // Table 4 State
    const [lower2a, setLower2a] = useState(false)
    const [upper2a, setUpper2a] = useState(false)
    const [cannotGrade2a, setCannotGrade2a] = useState(false)

    // Table 5 State
    const [table5_1, setTable5_1] = useState(false)
    const [table5_2, setTable5_2] = useState(false)

    // Table 6 State
    const [lower8a, setLower8a] = useState(false)
    const [upper8a, setUpper8a] = useState(false)
    const [cannotGrade8a, setCannotGrade8a] = useState(false)

    // Table 7 State
    const [table7_1, setTable7_1] = useState(false)
    const [table7_2, setTable7_2] = useState(false)

    // Table 8 State
    const [table8_1, setTable8_1] = useState(false)
    const [table8_2, setTable8_2] = useState(false)

    // Table 9 State
    const [table9_1, setTable9_1] = useState(false)
    const [table9_2, setTable9_2] = useState(false)

    // Table 10 State
    const [table10_1, setTable10_1] = useState(false)
    const [table10_2, setTable10_2] = useState(false)

    // Table 11 State
    const [table11_1, setTable11_1] = useState(false)
    const [table11_2, setTable11_2] = useState(false)

    // Table 12 State
    const [lower2DD, setLower2DD] = useState(false)
    const [lower1DD, setLower1DD] = useState(false)
    const [cannotGradeDD, setCannotGradeDD] = useState(false)

    // Table 13 State
    const [select, setSelect] = useState(1)
    
    // Clear state
    const onClearHandle = () => {
        window.location.reload()
    }

    // Submit handle
    const onSubmitHandle = async () => {
        setIsPending(true)
        try {
            // API lists
            setIsPending(false)
            setError("")
            setIsCompleted(true)
        } catch(e) {
            setError(e.message)
            setIsPending(false)
        }
    }

    useEffect(() => {
        if(isCompleted) {
            navigate('/home')
        }
    }, [isCompleted])

    return (
        <div className='flex flex-col space-y-4'>
            <table className="justify-center table-auto">
                <thead>
                    <tr className="border-collapse border border-slate-400">
                        <th className="p-2 bg-trustworthy-300">No.</th>
                        <th className="p-2 bg-trustworthy-300">EyePACS GRADING GUIDELINES</th>
                        <th className="p-2 bg-trustworthy-300">YES</th>
                        <th className="p-2 bg-trustworthy-300">Cannot Grade</th>
                    </tr>
                </thead>

                <tbody>

                    <tr>
                        <td className="border border-slate-300 p-1 text-center">1</td>
                        <td className="border border-slate-300 p-1 text-left px-4">No apparent diabetic retionpathy</td>
                        <td className="border border-slate-300 p-1 text-center"><input disabled={table1_2} onChange={() => setTable1_1(!table1_1)} className='h-5 w-5' type="checkbox"></input></td>
                        <td className="border border-slate-300 p-1 text-center"><input disabled={table1_1} onChange={() => setTable1_2(!table1_2)} className='h-5 w-5' type="checkbox"></input></td>
                    </tr>

                    <tr>
                        <td className="border border-slate-300 p-1 text-center">2</td>
                        <td className="border border-slate-300 p-1 text-left px-4"> Microaneurysms ONLY (MA)</td>
                        <td className="border border-slate-300 p-1 text-center"><input disabled={table2_2} onChange={() => setTable2_1(!table2_1)} className='h-5 w-5' type="checkbox"></input></td>
                        <td className="border border-slate-300 p-1 text-center"><input disabled={table2_1} onChange={() => setTable2_2(!table2_2)} className='h-5 w-5' type="checkbox"></input></td>
                    </tr>


                    <tr>
                        <td className="border border-slate-300 p-1 text-center">3</td>
                        <td className="border border-slate-300 p-1 text-left px-4"> Cotton wool spts (CW)</td>
                        <td className="border border-slate-300 p-1 text-center"><input disabled={table3_2} onChange={() => setTable3_1(!table3_1)} className='h-5 w-5' type="checkbox"></input></td>
                        <td className="border border-slate-300 p-1 text-center"><input disabled={table3_1} onChange={() => setTable3_2(!table3_2)} className='h-5 w-5' type="checkbox"></input></td>
                    </tr>


                    <tr>
                        <td className="border border-slate-300 p-1 text-center">4</td>
                        <td className="border border-slate-300 p-1 text-left px-4">Hemorrhages with or without MA (HMA) 2a</td>

                        <td className="border border-slate-300 p-1 flex space-x-2 justify-center">
                            <table>
                                <tbody>
                                    <tr>
                                        <td className="border border-slate-300 p-1">
                                            <input disabled={lower2a || cannotGrade2a} onChange={() => setUpper2a(!upper2a)} className='h-5 w-5' type="checkbox" ></input>
                                            <label>{`<2a`}</label>
                                        </td>

                                        <td className="border border-slate-300 p-1 ">
                                            <input disabled={upper2a || cannotGrade2a} onChange={() => setLower2a(!lower2a)} className='h-5 w-5' type="checkbox"></input>
                                            <label>{`2a>`}</label>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </td>

                        <td className="border border-slate-300 p-1 text-center">
                            <input disabled={upper2a || lower2a} onChange={() => setCannotGrade2a(!cannotGrade2a)} className='h-5 w-5' type="checkbox"></input>
                        </td>
                    </tr>


                    <tr>
                        <td className="border border-slate-300 p-1 text-center">5</td>
                        <td className="border border-slate-300 p-1 text-left px-4">Difinite Venous Beading 6a</td>
                        <td className="border border-slate-300 p-1 text-center"><input disabled={table5_2} onChange={() => setTable5_1(!table5_1)} className='h-5 w-5' type="checkbox"></input></td>
                        <td className="border border-slate-300 p-1 text-center"><input disabled={table5_1} onChange={() => setTable5_2(!table5_2)} className='h-5 w-5' type="checkbox"></input></td>
                    </tr>

                    <tr>
                        <td className="border border-slate-300 p-1 text-center">6</td>
                        <td className="border border-slate-300 p-1 text-left px-4">Intraretinal microvascular abnormalities (IRMA) 8a</td>

                        <td className="border border-slate-300 p-1 flex space-x-2 justify-center">
                            <div>
                                <table>
                                    <tbody>
                                        <tr>
                                            <td className="border border-slate-300 p-1" >
                                                <input disabled={lower8a || cannotGrade8a} onChange={() => setUpper8a(!upper8a)} className='h-5 w-5' type="checkbox" ></input>
                                                <label>{`<8a`}</label>
                                            </td>

                                            <td className="border border-slate-300 p-1 ">
                                                <input disabled={upper8a || cannotGrade8a} onChange={() => setLower8a(!lower8a)} className='h-5 w-5' type="checkbox"></input>
                                                <label>{`8a>`}</label>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </td>
                        <td className="border border-slate-300 p-1 text-center">
                            <input disabled={upper8a || lower8a} onChange={() => setCannotGrade8a(!cannotGrade8a)} className='h-5 w-5' type="checkbox"></input>
                        </td>
                    </tr>


                    <tr >
                        <td className="border border-slate-300 p-1 text-center">7</td>
                        <td className="border border-slate-300 p-1 text-left px-4">New vessels (NV) or Fibrous Proliferation (FP)</td>
                        <td className="border border-slate-300 p-1 text-center"><input disabled={table7_2} onChange={() => setTable7_1(!table7_1)} className='h-5 w-5' type="checkbox"></input></td>
                        <td className="border border-slate-300 p-1 text-center"><input disabled={table7_1} onChange={() => setTable7_2(!table7_2)} className='h-5 w-5' type="checkbox"></input></td>
                    </tr>


                    <tr>
                        <td className="border border-slate-300 p-1 text-center">8</td>
                        <td className="border border-slate-300 p-1 text-left px-4">Preretinal (PRH) or vitreous (VH) hemorrhage</td>
                        <td className="border border-slate-300 p-1 text-center"><input disabled={table8_2} onChange={() => setTable8_1(!table8_1)} className='h-5 w-5' type="checkbox"></input></td>
                        <td className="border border-slate-300 p-1 text-center"><input disabled={table8_1} onChange={() => setTable8_2(!table8_2)} className='h-5 w-5' type="checkbox"></input></td>
                    </tr>


                    <tr>
                        <td className="border border-slate-300 p-1 text-center">9</td>
                        <td className="border border-slate-300 p-1 text-left px-4">Panretinal laser scars present</td>
                        <td className="border border-slate-300 p-1 text-center"><input disabled={table9_2} onChange={() => setTable9_1(!table9_1)} className='h-5 w-5' type="checkbox"></input></td>
                        <td className="border border-slate-300 p-1 text-center"><input disabled={table9_1} onChange={() => setTable9_2(!table9_2)} className='h-5 w-5' type="checkbox"></input></td>
                    </tr>

                    <tr>
                        <td className="border border-slate-300 p-1 text-center">10</td>
                        <td className="border border-slate-300 p-1 text-left px-4">Focal laser scars present</td>
                        <td className="border border-slate-300 p-1 text-center"><input disabled={table10_2} onChange={() => setTable10_1(!table10_1)} className='h-5 w-5' type="checkbox"></input></td>
                        <td className="border border-slate-300 p-1 text-center"><input disabled={table10_1} onChange={() => setTable10_2(!table10_2)} className='h-5 w-5' type="checkbox"></input></td>
                    </tr>

                    <tr>
                        <td className="border border-slate-300 p-1 text-center">11</td>
                        <td className="border border-slate-300 p-1 text-left px-4">Hard exudates (HE) present anywhere</td>
                        <td className="border border-slate-300 p-1 text-center"><input disabled={table11_2} onChange={() => setTable11_1(!table11_1)} className='h-5 w-5' type="checkbox"></input></td>
                        <td className="border border-slate-300 p-1 text-center"  ><input disabled={table11_1} onChange={() => setTable11_2(!table11_2)} className='h-5 w-5' type="checkbox"></input></td>
                    </tr>

                    <tr>
                        <td className="border border-slate-300 p-1 text-center">12</td>
                        <td className="border border-slate-300 p-1 text-left px-4"> HE close to center of macula</td>

                        <td className="border border-slate-300 p-1 flex space-x-2 justify-center">
                            <div>
                                <table>
                                    <tbody>
                                        <tr>
                                            <td className="border border-slate-300 p-1">
                                                <input disabled={lower1DD || cannotGradeDD} onChange={() => setLower2DD(!lower2DD)} className='h-5 w-5' type="checkbox" ></input>
                                                <label>{`<2DD`}</label>
                                            </td>
                                            <td className="border border-slate-300 p-1 ">
                                                <input disabled={lower2DD || cannotGradeDD} onChange={() => setLower1DD(!lower1DD)} className='h-5 w-5' type="checkbox"></input>
                                                <label>{`<1DD`}</label>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </td>
                        <td className="border border-slate-300 p-1 text-center">
                            <input disabled={lower1DD || lower2DD} onChange={() => setCannotGradeDD(!cannotGradeDD)} className='h-5 w-5' type="checkbox"></input>
                        </td>
                    </tr>

                    <tr>
                        <td className="border border-slate-300 p-1 text-center">13</td>
                        <td className="border border-slate-300 p-1 text-left px-4">Other referrable conditions in either eye:</td>

                        <td className="border border-slate-300 p-1 text-center">
                            <select onChange={(e) => setSelect(parseInt(e.target.value))} className='w-full border border-slate-300 p-1 focus:outline-none'>
                                <option value={1}>Cataract</option>
                                <option value={2}>Glaucoma</option>
                                <option value={3}>Occlusion</option>
                                <option value={4}>Maculopathy</option>
                                <option value={5}>Other</option>
                            </select>
                        </td>
                        <td className="border border-slate-300 p-1 text-center">
                        </td>
                    </tr>
                </tbody>
            </table>

            {/* Error */}
            {error &&
                <div className='flex space-x-2 items-center'>
                    <div>
                        <BiErrorCircle className='text-red-500 h-5 w-5'/>
                    </div>
                    <div className='text-red-500 text-md'>
                        {error}
                    </div>
                </div>
            }
            <div className='flex justify-end space-x-4'>
                <button onClick={onClearHandle} className='py-2 px-4 bg-blue-400 hover:bg-blue-500 rounded-full w-48'>
                    <div className='font-bold text-white'>
                        Back to Default
                    </div>
                </button>
                {isPending?
                    <button disabled className='py-2 px-4 disabled:bg-trustworthy-500 rounded-full'>
                        <div className='font-bold text-white'>
                            LOADING...
                        </div>
                    </button>
                    :
                    <button onClick={onSubmitHandle} className='py-2 px-4 bg-trustworthy-400 hover:bg-trustworthy-500 rounded-full w-36'>
                        <div className='font-bold text-white'>
                            Update
                        </div>
                    </button>
                }
            </div>
        </div>
    )
}
