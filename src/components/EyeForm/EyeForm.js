import React, { useState, useEffect } from 'react'

// Icons
import { BiErrorCircle } from 'react-icons/bi'

// Services
import {
    updateEyeSide,
    updateEyeStatus,
} from '../../services/eyeServices'

import {
    createTable1,
    createTable2,
    createTable3,
    createTable4,
    createTable5,
    createTable6,
    createTable7,
    createTable8,
    createTable9,
    createTable10,
    createTable11,
    createTable12,
    createTable13,
    createTable14,
    deleteAllTable,
} from '../../services/tableServices'
import { createComment } from '../../services/commentServices'

export const EyeForm = ({ currentEyeIndexIn, eyesManyIn, onNextPage, onLastPage, eye_photo_id }) => {
    // Comments
    const [comments, setComments] = useState("")

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

    // Table 13, eyeside, 14 State
    const [selectOther, setSelectOther] = useState(0)
    const [selectEyeSide, setSelectEyeSide] = useState(2)
    const [selectTable14, setSelectTable14] = useState(0)
    
    // Clear state
    const onClearHandle = () => {
        window.location.reload()
    }

    // Submit handle
    const onSubmitHandle = async () => {
        setIsPending(true)
        try {
            const table1 = await createTable1(eye_photo_id, table1_1, table1_2)
            const table2 = await createTable2(eye_photo_id, table2_1, table2_2)
            const table3 = await createTable3(eye_photo_id, table3_1, table3_2)
            const table4 = await createTable4(eye_photo_id, lower2a, upper2a, cannotGrade2a)
            const table5 = await createTable5(eye_photo_id, table5_1, table5_2)
            const table6 = await createTable6(eye_photo_id, lower8a, upper8a, cannotGrade8a)
            const table7 = await createTable7(eye_photo_id, table7_1, table7_2)
            const table8 = await createTable8(eye_photo_id, table8_1, table8_2)
            const table9 = await createTable9(eye_photo_id, table9_1, table9_2)
            const table10 = await createTable10(eye_photo_id, table10_1, table10_2)
            const table11 = await createTable11(eye_photo_id, table11_1, table11_2)
            const table12 = await createTable12(eye_photo_id, lower2DD, lower1DD, cannotGradeDD)
            const table13 = await createTable13(eye_photo_id, selectOther)
            const table14 = await createTable14(eye_photo_id, selectTable14)
            const eyesideUpdate = await updateEyeSide(eye_photo_id, selectEyeSide)
            const commentCreate = await createComment(eye_photo_id, comments)
            const statusUpdate = await updateEyeStatus(eye_photo_id)
            setIsPending(false)
            setError("")
            setIsCompleted(true)
            window.location.href=`/home/create/${eyesManyIn[currentEyeIndexIn + 1].eye_photo_id}`
        } catch (e) {
            const deleteTable = await deleteAllTable(eye_photo_id)
            setError(e.message)
            setIsPending(false)
        }
    }

    return (
        <div className='flex flex-col space-y-4'>
            <div className='flex justify-between'>
                <div>
                    <button onClick={() => onLastPage()} className='py-2 px-4 bg-trustworthy-400 hover:bg-trustworthy-500 rounded-full w-36'>
                        <div className='font-bold text-white'>
                            Back
                        </div>
                    </button>
                </div>
                <div>
                    <button onClick={() => onNextPage()} className='py-2 px-4 bg-trustworthy-400 hover:bg-trustworthy-500 rounded-full w-36'>
                        <div className='font-bold text-white'>
                            Next
                        </div>
                    </button>
                </div>
            </div>
            {/* Image ID */}
            {eye_photo_id &&
                <div className='bg-blue-400 p-2 rounded-lg'>
                    <div className='flex justify-center text-2xl font-bold text-white'>
                        {eye_photo_id}
                    </div>
                </div>
            }
            <table className="justify-center table-auto ">
                <thead>
                    <tr className="border-collapse border border-slate-400 ">
                        <th className="bg-trustworthy-300">No.</th>
                        <th className="bg-trustworthy-300">EyePACS GRADING GUIDELINES</th>
                        <th className="bg-trustworthy-300">YES</th>
                        <th className="bg-trustworthy-300">Cannot Grade</th>
                    </tr>
                </thead>

                <tbody>

                    <tr>
                        <td className="border border-slate-300 text-center">1</td>
                        <td className="border border-slate-300 text-left px-4">No apparent diabetic retionpathy</td>
                        <td className="border border-slate-300 text-center"><input disabled={table1_2} onChange={() => setTable1_1(!table1_1)} className='h-4 w-4' type="checkbox"></input></td>
                        <td className="border border-slate-300 text-center"><input disabled={table1_1} onChange={() => setTable1_2(!table1_2)} className='h-4 w-4' type="checkbox"></input></td>
                    </tr>

                    <tr>
                        <td className="border border-slate-300 text-center">2</td>
                        <td className="border border-slate-300 text-left px-4"> Microaneurysms ONLY (MA)</td>
                        <td className="border border-slate-300 text-center"><input disabled={table2_2} onChange={() => setTable2_1(!table2_1)} className='h-4 w-4' type="checkbox"></input></td>
                        <td className="border border-slate-300 text-center"><input disabled={table2_1} onChange={() => setTable2_2(!table2_2)} className='h-4 w-4' type="checkbox"></input></td>
                    </tr>


                    <tr>
                        <td className="border border-slate-300 text-center">3</td>
                        <td className="border border-slate-300 text-left px-4"> Cotton wool spts (CW)</td>
                        <td className="border border-slate-300 text-center"><input disabled={table3_2} onChange={() => setTable3_1(!table3_1)} className='h-4 w-4' type="checkbox"></input></td>
                        <td className="border border-slate-300 text-center"><input disabled={table3_1} onChange={() => setTable3_2(!table3_2)} className='h-4 w-4' type="checkbox"></input></td>
                    </tr>


                    <tr>
                        <td className="border border-slate-300 text-center">4</td>
                        <td className="border border-slate-300 text-left px-4">Hemorrhages with or without MA (HMA) 2a</td>

                        <td className="border border-slate-300 flex space-x-2 justify-center">
                            <table>
                                <tbody>
                                    <tr>
                                        <td className="border border-slate-300">
                                            <input disabled={upper2a || cannotGrade2a} onChange={() => setLower2a(!lower2a)} className='h-4 w-4' type="checkbox" ></input>
                                            <label>{`<2a`}</label>
                                        </td>

                                        <td className="border border-slate-300 ">
                                            <input disabled={lower2a || cannotGrade2a} onChange={() => setUpper2a(!upper2a)} className='h-4 w-4' type="checkbox"></input>
                                            <label>{`2a>`}</label>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </td>

                        <td className="border border-slate-300 text-center">
                            <input disabled={upper2a || lower2a} onChange={() => setCannotGrade2a(!cannotGrade2a)} className='h-4 w-4' type="checkbox"></input>
                        </td>
                    </tr>


                    <tr>
                        <td className="border border-slate-300 text-center">5</td>
                        <td className="border border-slate-300 text-left px-4">Difinite Venous Beading 6a</td>
                        <td className="border border-slate-300 text-center"><input disabled={table5_2} onChange={() => setTable5_1(!table5_1)} className='h-4 w-4' type="checkbox"></input></td>
                        <td className="border border-slate-300 text-center"><input disabled={table5_1} onChange={() => setTable5_2(!table5_2)} className='h-4 w-4' type="checkbox"></input></td>
                    </tr>

                    <tr>
                        <td className="border border-slate-300 text-center">6</td>
                        <td className="border border-slate-300 text-left px-4">Intraretinal microvascular abnormalities (IRMA) 8a</td>

                        <td className="border border-slate-300 flex space-x-2 justify-center">
                            <div>
                                <table>
                                    <tbody>
                                        <tr>
                                            <td className="border border-slate-300" >
                                                <input disabled={upper8a || cannotGrade8a} onChange={() => setLower8a(!lower8a)} className='h-4 w-4' type="checkbox" ></input>
                                                <label>{`<8a`}</label>
                                            </td>

                                            <td className="border border-slate-300 ">
                                                <input disabled={lower8a || cannotGrade8a} onChange={() => setUpper8a(!upper8a)} className='h-4 w-4' type="checkbox"></input>
                                                <label>{`8a>`}</label>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </td>
                        <td className="border border-slate-300 text-center">
                            <input disabled={upper8a || lower8a} onChange={() => setCannotGrade8a(!cannotGrade8a)} className='h-4 w-4' type="checkbox"></input>
                        </td>
                    </tr>


                    <tr >
                        <td className="border border-slate-300 text-center">7</td>
                        <td className="border border-slate-300 text-left px-4">New vessels (NV) or Fibrous Proliferation (FP)</td>
                        <td className="border border-slate-300 text-center"><input disabled={table7_2} onChange={() => setTable7_1(!table7_1)} className='h-4 w-4' type="checkbox"></input></td>
                        <td className="border border-slate-300 text-center"><input disabled={table7_1} onChange={() => setTable7_2(!table7_2)} className='h-4 w-4' type="checkbox"></input></td>
                    </tr>


                    <tr>
                        <td className="border border-slate-300 text-center">8</td>
                        <td className="border border-slate-300 text-left px-4">Preretinal (PRH) or vitreous (VH) hemorrhage</td>
                        <td className="border border-slate-300 text-center"><input disabled={table8_2} onChange={() => setTable8_1(!table8_1)} className='h-4 w-4' type="checkbox"></input></td>
                        <td className="border border-slate-300 text-center"><input disabled={table8_1} onChange={() => setTable8_2(!table8_2)} className='h-4 w-4' type="checkbox"></input></td>
                    </tr>


                    <tr>
                        <td className="border border-slate-300 text-center">9</td>
                        <td className="border border-slate-300 text-left px-4">Panretinal laser scars present</td>
                        <td className="border border-slate-300 text-center"><input disabled={table9_2} onChange={() => setTable9_1(!table9_1)} className='h-4 w-4' type="checkbox"></input></td>
                        <td className="border border-slate-300 text-center"><input disabled={table9_1} onChange={() => setTable9_2(!table9_2)} className='h-4 w-4' type="checkbox"></input></td>
                    </tr>

                    <tr>
                        <td className="border border-slate-300 text-center">10</td>
                        <td className="border border-slate-300 text-left px-4">Focal laser scars present</td>
                        <td className="border border-slate-300 text-center"><input disabled={table10_2} onChange={() => setTable10_1(!table10_1)} className='h-4 w-4' type="checkbox"></input></td>
                        <td className="border border-slate-300 text-center"><input disabled={table10_1} onChange={() => setTable10_2(!table10_2)} className='h-4 w-4' type="checkbox"></input></td>
                    </tr>

                    <tr>
                        <td className="border border-slate-300 text-center">11</td>
                        <td className="border border-slate-300 text-left px-4">Hard exudates (HE) present anywhere</td>
                        <td className="border border-slate-300 text-center"><input disabled={table11_2} onChange={() => setTable11_1(!table11_1)} className='h-4 w-4' type="checkbox"></input></td>
                        <td className="border border-slate-300 text-center"  ><input disabled={table11_1} onChange={() => setTable11_2(!table11_2)} className='h-4 w-4' type="checkbox"></input></td>
                    </tr>

                    <tr>
                        <td className="border border-slate-300 text-center">12</td>
                        <td className="border border-slate-300 text-left px-4"> HE close to center of macula</td>

                        <td className="border border-slate-300 flex space-x-2 justify-center">
                            <div>
                                <table>
                                    <tbody>
                                        <tr>
                                            <td className="border border-slate-300">
                                                <input disabled={lower1DD || cannotGradeDD} onChange={() => setLower2DD(!lower2DD)} className='h-4 w-4' type="checkbox" ></input>
                                                <label>{`<2DD`}</label>
                                            </td>
                                            <td className="border border-slate-300 ">
                                                <input disabled={lower2DD || cannotGradeDD} onChange={() => setLower1DD(!lower1DD)} className='h-4 w-4' type="checkbox"></input>
                                                <label>{`<1DD`}</label>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </td>
                        <td className="border border-slate-300 text-center">
                            <input disabled={lower1DD || lower2DD} onChange={() => setCannotGradeDD(!cannotGradeDD)} className='h-4 w-4' type="checkbox"></input>
                        </td>
                    </tr>

                    <tr>
                        <td className="border border-slate-300 text-center">13</td>
                        <td className="border border-slate-300 text-left px-4">Other referrable conditions in either eye</td>

                        <td className="border border-slate-300 text-center">
                            {/* Need Fix */}
                            <select value={selectOther} onChange={(e) => setSelectOther(parseInt(e.target.value))} className='w-full border border-slate-300 focus:outline-none'>
                                <option value={1}>Cataract</option>
                                <option value={2}>Glaucoma</option>
                                <option value={3}>Occlusion</option>
                                <option value={4}>Maculopathy</option>
                                <option value={0}>Other</option>
                            </select>
                        </td>
                        <td className="border border-slate-300 text-center">
                        </td>
                    </tr>

                    <tr>
                        <td className="border border-slate-300 text-center">14</td>
                        <td className="border border-slate-300 text-left px-4">Side </td>

                        <td className="border border-slate-300 text-center">
                            {/* Need Fix */}
                            <select value={selectEyeSide} onChange={(e) => setSelectEyeSide(parseInt(e.target.value))} className='w-full border border-slate-300 focus:outline-none'>
                                <option value={2}>None</option>
                                <option value={0}>Right</option>
                                <option value={1}>Left</option>
                            </select>
                        </td>
                        <td className="border border-slate-300 text-center">
                        </td>
                    </tr>


                    <tr>
                        <td className="border border-slate-300 text-center">15</td>
                        <td className="border border-slate-300 text-left px-4">EyePACS  Grading Level</td>

                        {/* Need Fix */}
                        <td className="border border-slate-300 text-center">
                            <select value={selectTable14} onChange={(e) => setSelectTable14(parseInt(e.target.value))} className='w-full border border-slate-300 focus:outline-none'>
                                <option value={0}>No retinopathy</option>
                                <option value={1}>Mild NPDR </option>
                                <option value={2}>Moderate NPDR</option>
                                <option value={3}>Severe NPDR</option>
                                <option value={4}>PDR</option>
                                <option value={5}>No macular edema</option>
                                <option value={6}>Macular edema, not clinically significant</option>
                                <option value={7}>Macula edema, clinically significant</option>
                            </select>
                        </td>
                        <td className="border border-slate-300 text-center">
                        </td>
                    </tr>



                </tbody>
            </table>
            {/* comments */}
            <div>
                <textarea onChange={(e) => setComments(e.target.value)} className='w-full h-28 border border-black p-2' placeholder='Comments'></textarea>
            </div>

            {/* Error */}
            {error &&
                <div className='flex space-x-2 items-center'>
                    <div>
                        <BiErrorCircle className='text-red-500 h-5 w-5' />
                    </div>
                    <div className='text-red-500 text-md'>
                        {error}
                    </div>
                </div>
            }
            <div className='flex justify-end space-x-4'>
                <div className='space-x-4'>
                    <button onClick={onClearHandle} className='py-2 px-4 bg-blue-400 hover:bg-blue-500 rounded-full w-36'>
                        <div className='font-bold text-white'>
                            Clear All
                        </div>
                    </button>
                    {isPending ?
                        <button disabled className='py-2 px-4 disabled:bg-trustworthy-500 rounded-full'>
                            <div className='font-bold text-white'>
                                LOADING...
                            </div>
                        </button>
                        :
                        <button onClick={onSubmitHandle} disabled={isCompleted} className={`${isCompleted? 'disabled:bg-trustworthy-500': ''} py-2 px-4 bg-trustworthy-400 hover:bg-trustworthy-500 rounded-full w-36`}>
                            <div className='font-bold text-white'>
                                {isCompleted? 'Done':'Submit' }
                            </div>
                        </button>
                    }
                </div>
            </div>
        </div>
    )
}
