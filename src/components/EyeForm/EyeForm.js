import React, { useState, useEffect } from 'react'

export const EyeForm = () => {

    // Table1 State
    const [table1_1, setTable1_1] = useState(false)
    const [table1_2, setTable1_2] = useState(false)

    // Table2 State
    const [table2_1, setTable2_1] = useState(false)
    const [table2_2, setTable2_2] = useState(false)

    // Table3 State
    const [table3_1, setTable3_1] = useState(false)
    const [table3_2, setTable3_2] = useState(false)

    // Table5 State
    const [table5_1, setTable5_1] = useState(false)
    const [table5_2, setTable5_2] = useState(false)

    return (
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
                                        <input className='h-5 w-5' type="checkbox" ></input>
                                        <label>&#60;2a</label>
                                    </td>

                                    <td className="border border-slate-300 p-1 ">
                                        <input className='h-5 w-5' type="checkbox"></input>
                                        <label>2a&#62;</label>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </td>

                    <td className="border border-slate-300 p-1 text-center"><input className='h-5 w-5' type="checkbox"></input></td>
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
                                            <input className='h-5 w-5' type="checkbox" ></input>
                                            <label>&#60;8a</label>
                                        </td>

                                        <td className="border border-slate-300 p-1 ">
                                            <input className='h-5 w-5' type="checkbox"></input>
                                            <label>8a&#62;</label>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </td>
                    <td className="border border-slate-300 p-1 text-center"><input className='h-5 w-5' type="checkbox"></input></td>
                </tr>


                <tr >
                    <td className="border border-slate-300 p-1 text-center">7</td>
                    <td className="border border-slate-300 p-1 text-left px-4">New vessels (NV) or Fibrous Proliferation (FP)</td>
                    <td className="border border-slate-300 p-1 text-center"><input className='h-5 w-5' type="checkbox"></input></td>
                    <td className="border border-slate-300 p-1 text-center"><input className='h-5 w-5' type="checkbox"></input></td>
                </tr>


                <tr>
                    <td className="border border-slate-300 p-1 text-center">8</td>
                    <td className="border border-slate-300 p-1 text-left px-4">Preretinal (PRH) or vitreous (VH) hemorrhage</td>
                    <td className="border border-slate-300 p-1 text-center"><input className='h-5 w-5' type="checkbox"></input></td>
                    <td className="border border-slate-300 p-1 text-center"><input className='h-5 w-5' type="checkbox"></input></td>
                </tr>


                <tr>
                    <td className="border border-slate-300 p-1 text-center">9</td>
                    <td className="border border-slate-300 p-1 text-left px-4">Panretinal laser scars present</td>
                    <td className="border border-slate-300 p-1 text-center"><input className='h-5 w-5' type="checkbox"></input></td>
                    <td className="border border-slate-300 p-1 text-center"><input className='h-5 w-5' type="checkbox"></input></td>
                </tr>

                <tr>
                    <td className="border border-slate-300 p-1 text-center">10</td>
                    <td className="border border-slate-300 p-1 text-left px-4">Focal laser scars present</td>
                    <td className="border border-slate-300 p-1 text-center"><input className='h-5 w-5' type="checkbox"></input></td>
                    <td className="border border-slate-300 p-1 text-center"><input className='h-5 w-5' type="checkbox"></input></td>
                </tr>

                <tr>
                    <td className="border border-slate-300 p-1 text-center">11</td>
                    <td className="border border-slate-300 p-1 text-left px-4">Hard exudates (HE) present anywhere</td>
                    <td className="border border-slate-300 p-1 text-center"><input className='h-5 w-5' type="checkbox"></input></td>
                    <td className="border border-slate-300 p-1 text-center"  ><input className='h-5 w-5' type="checkbox"></input></td>
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
                                            <input className='h-5 w-5' type="checkbox" ></input>
                                            <label>&#60;2DD</label>
                                        </td>
                                        <td className="border border-slate-300 p-1 ">
                                            <input className='h-5 w-5' type="checkbox"></input>
                                            <label>&#60;1DD</label>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </td>
                    <td className="border border-slate-300 p-1 text-center"><input className='h-5 w-5' type="checkbox"></input></td>
                </tr>

                <tr>
                    <td className="border border-slate-300 p-1 text-center">13</td>
                    <td className="border border-slate-300 p-1 text-left px-4">Other referrable conditions in either eye:</td>

                    <td className="border border-slate-300 p-1 text-center">
                        <select className='w-full border border-slate-300 p-1 focus:outline-none'>
                            <option value={1}>Cataract</option>
                            <option value={2}>Glaucoma</option>
                            <option value={3}>Occlusion</option>
                            <option value={4}>Maculopathy</option>
                            <option value={5}>Other</option>
                        </select>
                    </td>
                    <td className="border border-slate-300 p-1 text-center">
                        <button className='py-2 px-4 bg-trustworthy-400 hover:bg-trustworthy-500 rounded-full'>
                            <div className='font-bold text-white'>
                                Submit
                            </div>
                        </button>
                    </td>

                </tr>
            </tbody>
        </table>
    )
}
