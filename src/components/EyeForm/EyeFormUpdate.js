import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom' 

// Icons
import { BiErrorCircle } from 'react-icons/bi'

// Services
import {
    updateEyeSide,
} from '../../services/eyeServices'

import {
    // Get
    getTable1,
    getTable2,
    getTable3,
    getTable4,
    getTable5,
    getTable6,
    getTable7,
    getTable8,
    getTable9,
    getTable10,
    getTable11,
    getTable12,
    getTable13,
    getTable14,

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
    updateTable14,
} from '../../services/tableServices'
import { updateComment, getComment } from '../../services/commentServices'

export const EyeFormUpdate = ({ eye_photo_id }) => {

    const navigate = useNavigate()

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
    const [selectOther, setSelectOther] = useState(1)
    const [selectEyeSide, setSelectEyeSide] = useState(2)
    const [selectTable14, setSelectTable14] = useState(1)
    
    // Clear state
    const onDefaultHandle = () => {
        window.location.reload()
    }

    // Fetch eye checked
    const [getEyeError, setGetEyeError] = useState("")
    const fetchEyeSetting = async () => {
        try {
            // Generral Table
            const table1Res = await getTable1(eye_photo_id)
            setTable1_1(table1Res.value === 1? true: false)
            setTable1_2(table1Res.value === 0? true: false)

            const table2Res = await getTable2(eye_photo_id)
            setTable2_1(table2Res.value === 1? true: false)
            setTable2_2(table2Res.value === 0? true: false)

            const table3Res = await getTable3(eye_photo_id)
            setTable3_1(table3Res.value === 1? true: false)
            setTable3_2(table3Res.value === 0? true: false)

            const table5Res = await getTable5(eye_photo_id)
            setTable5_1(table5Res.value === 1? true: false)
            setTable5_2(table5Res.value === 0? true: false)

            const table7Res = await getTable7(eye_photo_id)
            setTable7_1(table7Res.value === 1? true: false)
            setTable7_2(table7Res.value === 0? true: false)

            const table8Res = await getTable8(eye_photo_id)
            setTable8_1(table8Res.value === 1? true: false)
            setTable8_2(table8Res.value === 0? true: false)

            const table9Res = await getTable9(eye_photo_id)
            setTable9_1(table9Res.value === 1? true: false)
            setTable9_2(table9Res.value === 0? true: false)

            const table10Res = await getTable10(eye_photo_id)
            setTable10_1(table10Res.value === 1? true: false)
            setTable10_2(table10Res.value === 0? true: false)

            const table11Res = await getTable11(eye_photo_id)
            setTable11_1(table11Res.value === 1? true: false)
            setTable11_2(table11Res.value === 0? true: false)

            // Special Table
            const table4Res = await getTable4(eye_photo_id)
            setLower2a(table4Res.value === 0? true: false)
            setUpper2a(table4Res.value === 1? true: false)
            setCannotGrade2a(table4Res.value === 2? true: false)

            const table6Res = await getTable6(eye_photo_id)
            setLower8a(table6Res.value === 0? true: false)
            setUpper8a(table6Res.value === 1? true: false)
            setCannotGrade8a(table6Res.value === 2? true: false)

            const table12Res = await getTable12(eye_photo_id)
            setLower2DD(table12Res.value === 0? true: false)
            setLower1DD(table12Res.value === 1? true: false)
            setCannotGradeDD(table12Res.value === 2? true: false)

            // Select table
            const table13Res = await getTable13(eye_photo_id)
            setSelectOther(table13Res.value)

            const table14Res = await getTable14(eye_photo_id)
            setSelectTable14(table14Res.value)

            const getEyeSide = await getTable1(eye_photo_id)
            setSelectEyeSide(getEyeSide.eye_photo.eyeside)

            setGetEyeError("")
        } catch(e) {
            setGetEyeError(e.message)
        }
    }

    // Submit handle
    const onSubmitHandle = async () => {
        setIsPending(true)
        try {
            // API lists
            const table1 = await updateTable1(eye_photo_id, table1_1, table1_2)
            const table2 = await updateTable2(eye_photo_id, table2_1, table2_2)
            const table3 = await updateTable3(eye_photo_id, table3_1, table3_2)
            const table4 = await updateTable4(eye_photo_id, lower2a, upper2a, cannotGrade2a)
            const table5 = await updateTable5(eye_photo_id, table5_1, table5_2)
            const table6 = await updateTable6(eye_photo_id, lower8a, upper8a, cannotGrade8a)
            const table7 = await updateTable7(eye_photo_id, table7_1, table7_2)
            const table8 = await updateTable8(eye_photo_id, table8_1, table8_2)
            const table9 = await updateTable9(eye_photo_id, table9_1, table9_2)
            const table10 = await updateTable10(eye_photo_id, table10_1, table10_2)
            const table11 = await updateTable11(eye_photo_id, table11_1, table11_2)
            const table12 = await updateTable12(eye_photo_id, lower2DD, lower1DD, cannotGradeDD)
            const table13 = await updateTable13(eye_photo_id, selectOther)
            const table14 = await updateTable14(eye_photo_id, selectTable14)
            const commentUpdate = await updateComment(eye_photo_id, comments)
            const eyesideUpdate = await updateEyeSide(eye_photo_id, selectEyeSide)
            setIsPending(false)
            setError("")
            setIsCompleted(true)
        } catch(e) {
            setError(e.message)
            setIsPending(false)
        }
    }

    const fetchComment = async (eye_photo_id) => {
        try {
            const res = await getComment(eye_photo_id)
            setComments(res.description)
        } catch(e) {
            setError(e.message)
        }
    }
    
    useEffect(() => {
        fetchEyeSetting()
        fetchComment(eye_photo_id)
    }, [])

    useEffect(() => {
        if(isCompleted) {
            navigate('/home')
        }
    }, [isCompleted])

    return (
        <div className='flex flex-col space-y-4'>
            {eye_photo_id &&
                <div className='bg-blue-400 p-2 rounded-lg'>
                    <div className='flex justify-center text-2xl font-bold text-white'>
                        {eye_photo_id}
                    </div>
                </div>
            }
            <table className="justify-center table-auto">
                <thead>
                    <tr className="border-collapse border border-slate-400">
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
                        <td className="border border-slate-300 text-center"><input checked={table1_1} disabled={table1_2} onChange={() => setTable1_1(!table1_1)} className='h-4 w-4' type="checkbox"></input></td>
                        <td className="border border-slate-300 text-center"><input checked={table1_2} disabled={table1_1} onChange={() => setTable1_2(!table1_2)} className='h-4 w-4' type="checkbox"></input></td>
                    </tr>

                    <tr>
                        <td className="border border-slate-300 text-center">2</td>
                        <td className="border border-slate-300 text-left px-4"> Microaneurysms ONLY (MA)</td>
                        <td className="border border-slate-300 text-center"><input checked={table2_1} disabled={table2_2} onChange={() => setTable2_1(!table2_1)} className='h-4 w-4' type="checkbox"></input></td>
                        <td className="border border-slate-300 text-center"><input checked={table2_2} disabled={table2_1} onChange={() => setTable2_2(!table2_2)} className='h-4 w-4' type="checkbox"></input></td>
                    </tr>


                    <tr>
                        <td className="border border-slate-300 text-center">3</td>
                        <td className="border border-slate-300 text-left px-4"> Cotton wool spts (CW)</td>
                        <td className="border border-slate-300 text-center"><input checked={table3_1} disabled={table3_2} onChange={() => setTable3_1(!table3_1)} className='h-4 w-4' type="checkbox"></input></td>
                        <td className="border border-slate-300 text-center"><input checked={table3_2} disabled={table3_1} onChange={() => setTable3_2(!table3_2)} className='h-4 w-4' type="checkbox"></input></td>
                    </tr>


                    <tr>
                        <td className="border border-slate-300 text-center">4</td>
                        <td className="border border-slate-300 text-left px-4">Hemorrhages with or without MA (HMA) 2a</td>

                        <td className="border border-slate-300 flex space-x-2 justify-center">
                            <table>
                                <tbody>
                                    <tr>
                                        <td className="border border-slate-300">
                                            <input checked={lower2a} disabled={upper2a || cannotGrade2a} onChange={() => setLower2a(!lower2a)} className='h-4 w-4' type="checkbox" ></input>
                                            <label>{`<2a`}</label>
                                        </td>

                                        <td className="border border-slate-300">
                                            <input checked={upper2a} disabled={lower2a || cannotGrade2a} onChange={() => setUpper2a(!upper2a)} className='h-4 w-4' type="checkbox"></input>
                                            <label>{`2a>`}</label>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </td>

                        <td className="border border-slate-300 text-center">
                            <input checked={cannotGrade2a} disabled={lower2a || upper2a} onChange={() => setCannotGrade2a(!cannotGrade2a)} className='h-4 w-4' type="checkbox"></input>
                        </td>
                    </tr>


                    <tr>
                        <td className="border border-slate-300 text-center">5</td>
                        <td className="border border-slate-300 text-left px-4">Difinite Venous Beading 6a</td>
                        <td className="border border-slate-300 text-center"><input checked={table5_1} disabled={table5_2} onChange={() => setTable5_1(!table5_1)} className='h-4 w-4' type="checkbox"></input></td>
                        <td className="border border-slate-300 text-center"><input checked={table5_2} disabled={table5_1} onChange={() => setTable5_2(!table5_2)} className='h-4 w-4' type="checkbox"></input></td>
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
                                                <input checked={lower8a} disabled={upper8a || cannotGrade8a} onChange={() => setLower8a(!lower8a)} className='h-4 w-4' type="checkbox" ></input>
                                                <label>{`<8a`}</label>
                                            </td>

                                            <td className="border border-slate-300 ">
                                                <input checked={upper8a} disabled={lower8a || cannotGrade8a} onChange={() => setUpper8a(!upper8a)} className='h-4 w-4' type="checkbox"></input>
                                                <label>{`8a>`}</label>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </td>
                        <td className="border border-slate-300 text-center">
                            <input checked={cannotGrade8a} disabled={lower8a || upper8a} onChange={() => setCannotGrade8a(!cannotGrade8a)} className='h-4 w-4' type="checkbox"></input>
                        </td>
                    </tr>


                    <tr >
                        <td className="border border-slate-300 text-center">7</td>
                        <td className="border border-slate-300 text-left px-4">New vessels (NV) or Fibrous Proliferation (FP)</td>
                        <td className="border border-slate-300 text-center"><input checked={table7_1} disabled={table7_2} onChange={() => setTable7_1(!table7_1)} className='h-4 w-4' type="checkbox"></input></td>
                        <td className="border border-slate-300 text-center"><input checked={table7_2} disabled={table7_1} onChange={() => setTable7_2(!table7_2)} className='h-4 w-4' type="checkbox"></input></td>
                    </tr>


                    <tr>
                        <td className="border border-slate-300 text-center">8</td>
                        <td className="border border-slate-300 text-left px-4">Preretinal (PRH) or vitreous (VH) hemorrhage</td>
                        <td className="border border-slate-300 text-center"><input checked={table8_1} disabled={table8_2} onChange={() => setTable8_1(!table8_1)} className='h-4 w-4' type="checkbox"></input></td>
                        <td className="border border-slate-300 text-center"><input checked={table8_2} disabled={table8_1} onChange={() => setTable8_2(!table8_2)} className='h-4 w-4' type="checkbox"></input></td>
                    </tr>


                    <tr>
                        <td className="border border-slate-300 text-center">9</td>
                        <td className="border border-slate-300 text-left px-4">Panretinal laser scars present</td>
                        <td className="border border-slate-300 text-center"><input checked={table9_1} disabled={table9_2} onChange={() => setTable9_1(!table9_1)} className='h-4 w-4' type="checkbox"></input></td>
                        <td className="border border-slate-300 text-center"><input checked={table9_2} disabled={table9_1} onChange={() => setTable9_2(!table9_2)} className='h-4 w-4' type="checkbox"></input></td>
                    </tr>

                    <tr>
                        <td className="border border-slate-300 text-center">10</td>
                        <td className="border border-slate-300 text-left px-4">Focal laser scars present</td>
                        <td className="border border-slate-300 text-center"><input checked={table10_1} disabled={table10_2} onChange={() => setTable10_1(!table10_1)} className='h-4 w-4' type="checkbox"></input></td>
                        <td className="border border-slate-300 text-center"><input checked={table10_2} disabled={table10_1} onChange={() => setTable10_2(!table10_2)} className='h-4 w-4' type="checkbox"></input></td>
                    </tr>

                    <tr>
                        <td className="border border-slate-300 text-center">11</td>
                        <td className="border border-slate-300 text-left px-4">Hard exudates (HE) present anywhere</td>
                        <td className="border border-slate-300 text-center"><input checked={table11_1} disabled={table11_2} onChange={() => setTable11_1(!table11_1)} className='h-4 w-4' type="checkbox"></input></td>
                        <td className="border border-slate-300 text-center"  ><input checked={table11_2} disabled={table11_1} onChange={() => setTable11_2(!table11_2)} className='h-4 w-4' type="checkbox"></input></td>
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
                                                <input checked={lower2DD} disabled={lower1DD || cannotGradeDD} onChange={() => setLower2DD(!lower2DD)} className='h-4 w-4' type="checkbox" ></input>
                                                <label>{`<2DD`}</label>
                                            </td>
                                            <td className="border border-slate-300 ">
                                                <input checked={lower1DD} disabled={lower2DD || cannotGradeDD} onChange={() => setLower1DD(!lower1DD)} className='h-4 w-4' type="checkbox"></input>
                                                <label>{`<1DD`}</label>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </td>
                        <td className="border border-slate-300 text-center">
                            <input checked={cannotGradeDD} disabled={lower2DD || lower1DD} onChange={() => setCannotGradeDD(!cannotGradeDD)} className='h-4 w-4' type="checkbox"></input>
                        </td>
                    </tr>

                    <tr>
                        <td className="border border-slate-300 text-center">13</td>
                        <td className="border border-slate-300 text-left px-4">Other referrable conditions in either eye:</td>

                        <td className="border border-slate-300 text-center">
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
                <textarea value={comments} onChange={(e) => setComments(e.target.value)} className='w-full h-28 border border-black p-2'></textarea>
            </div>

            {/* Error */}
            {error &&
                <div className='flex space-x-2 items-center'>
                    <div>
                        <BiErrorCircle className='text-red-500 h-4 w-4'/>
                    </div>
                    <div className='text-red-500 text-md'>
                        {error}
                    </div>
                </div>
            }
            <div className='flex justify-end space-x-4'>
                <button onClick={onDefaultHandle} className='py-2 px-4 bg-blue-400 hover:bg-blue-500 rounded-full w-48'>
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
