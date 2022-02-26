import React from 'react'

export default function EyeForm() {
    return (
        <table className="table-fix justify-center table-auto">
            <thead>
                <tr className="border-collapse border border-slate-400">
                    <th className="border border-slate-300"></th>
                    <th className="border border-slate-300">EyePACS GRADING GUIDELINES</th>
                    <th className="border border-slate-300">YES</th>
                    <th className="border border-slate-300">Cannot Grade</th>
                </tr>
            </thead>

            <tbody>

                <tr>
                    <td className="border border-slate-300 text-right">1</td>
                    <td className="border border-slate-300 text-right">No apparent diabetic retionpathy</td>
                    <td className="border border-slate-300 text-center"><input type="checkbox"></input></td>
                    <td className="border border-slate-300 text-center"><input type="checkbox"></input></td>
                </tr>

                <tr>
                    <td className="border border-slate-300 text-right">2</td>
                    <td className="border border-slate-300 text-right"> Microaneurysms ONLY (MA)</td>
                    <td className="border border-slate-300 text-center"><input type="checkbox"></input></td>
                    <td className="border border-slate-300 text-center"><input type="checkbox"></input></td>
                </tr>


                <tr>
                    <td className="border border-slate-300 text-right">3</td>
                    <td className="border border-slate-300 text-right"> Cotton wool spts (CW)</td>
                    <td className="border border-slate-300 text-center"><input type="checkbox"></input></td>
                    <td className="border border-slate-300 text-center"><input type="checkbox"></input></td>
                </tr>


                <tr>
                    <td className="border border-slate-300 text-right">4</td>
                    <td className="border border-slate-300 text-right">Hemorrhages with or without MA (HMA) 2a</td>

                    <td className="border border-slate-300 flex space-x-2 justify-center">

                        <td className="border border-slate-300">
                            <input type="checkbox" ></input>
                            <label>&#60;2a</label>
                        </td>

                        <td className="border border-slate-300 ">
                            <input type="checkbox"></input>
                            <label>2a&#62;</label>
                        </td>
                    </td>

                    <td className="border border-slate-300 text-center"><input type="checkbox"></input></td>
                </tr>


                <tr>
                    <td className="border border-slate-300 text-right">5</td>
                    <td className="border border-slate-300 text-right">Difinite Venous Beading 6a</td>
                    <td className="border border-slate-300 text-center"><input type="checkbox"></input></td>
                    <td className="border border-slate-300 text-center"><input type="checkbox"></input></td>
                </tr>

                <tr>
                    <td className="border border-slate-300 text-right">6</td>
                    <td className="border border-slate-300 text-right">Intraretinal microvascular abnormalities (IRMA) 8a</td>

                    <td className="border border-slate-300 flex space-x-2 justify-center">
                        <td className="border border-slate-300" >
                            <input type="checkbox" ></input>
                            <label>&#60;8a</label>
                        </td>

                        <td className="border border-slate-300 ">
                            <input type="checkbox"></input>
                            <label>8a&#62;</label>
                        </td>
                    </td>
                    <td className="border border-slate-300 text-center"><input type="checkbox"></input></td>
                </tr>


                <tr >
                    <td className="border border-slate-300 text-right">7</td>
                    <td className="border border-slate-300 text-right">New vessels (NV) or Fibrous Proliferation (FP)</td>
                    <td className="border border-slate-300 text-center"><input type="checkbox"></input></td>
                    <td className="border border-slate-300 text-center"><input type="checkbox"></input></td>
                </tr>


                <tr>
                    <td className="border border-slate-300 text-right">8</td>
                    <td className="border border-slate-300 text-right">Preretinal (PRH) or vitreous (VH) hemorrhage</td>
                    <td className="border border-slate-300 text-center"><input type="checkbox"></input></td>
                    <td className="border border-slate-300 text-center"><input type="checkbox"></input></td>
                </tr>


                <tr>
                    <td className="border border-slate-300 text-right">9</td>
                    <td className="border border-slate-300 text-right">Panretinal laser scars present</td>
                    <td className="border border-slate-300 text-center"><input type="checkbox"></input></td>
                    <td className="border border-slate-300 text-center"><input type="checkbox"></input></td>
                </tr>

                <tr>
                    <td className="border border-slate-300 text-right">10</td>
                    <td className="border border-slate-300 text-right">Focal laser scars present</td>
                    <td className="border border-slate-300 text-center"><input type="checkbox"></input></td>
                    <td className="border border-slate-300 text-center"><input type="checkbox"></input></td>
                </tr>

                <tr>
                    <td className="border border-slate-300 text-right">11</td>
                    <td className="border border-slate-300 text-right">Hard exudates (HE) present anywhere</td>
                    <td className="border border-slate-300 text-center"><input type="checkbox"></input></td>
                    <td className="border border-slate-300 text-center"  ><input type="checkbox"></input></td>
                </tr>

                <tr>
                    <td className="border border-slate-300 text-right">12</td>
                    <td className="border border-slate-300 text-right"> HE close to center of macula</td>

                    <td className="border border-slate-300 flex space-x-2 justify-center">
                        <td className="border border-slate-300">
                            <input type="checkbox" ></input>
                            <label>&#60;2DD</label>
                        </td>
                        <td className="border border-slate-300 ">
                            <input type="checkbox"></input>
                            <label>&#60;1DD</label>
                        </td>
                    </td>
                    <td className="border border-slate-300 text-center"><input type="checkbox"></input></td>
                </tr>

                <tr>
                    <td className="border border-slate-300 text-right">13</td>
                    <td className="border border-slate-300 text-right">Other referrable conditions in either eye:</td>

                    <td className="border border-slate-300 text-center">
                        <button>DROPDOWN</button>
                    </td>

                </tr>

            </tbody>
        </table>

    )
}
