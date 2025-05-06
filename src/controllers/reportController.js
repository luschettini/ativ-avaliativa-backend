const PDFDocument = require("pdfkit");

const CursoModel = require("../models/cursoModel");

const exportCursoPDF = async (req, res)=> {
    try {
        const cursos = await CursoModel.getCursos();

        res.setHeader("Content-Type", "application/pdf");
        res.setHeader("Content-Disposition", "inline; filename=cursos.pdf");

        const doc = new PDFDocument();
        doc.pipe(res);

        //titulo
        doc.fontSize(30).text("Relatorio de Cursos", {align: "center"});
        doc.moveDown();

        //cabeçalho
        doc.fontSize(18).text("Id | Nome | Descricao", {underline: true});
        doc.moveDown(0.5);

        // add dados cursos
        cursos.forEach((cursos) => {
            doc.text(
                `${cursos.id} | ${cursos.name} | ${cursos.poder}`,
            )
        });
        doc.end();
    } catch (error) {
        res.status(500).json({message: "erro ao gerar o PDF"})
    }
}

module.exports = {exportCursoPDF}