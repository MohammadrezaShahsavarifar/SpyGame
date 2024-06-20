const catchAsync = require("../utiles/catchAsync");


exports.createOne = Model => catchAsync(async (req, res, next) => {
    const doc = await Model.create(req.body)


    res.status(201).json({
        status: "success",
        data: {
            data: doc
        }
    })
})
exports.deleteOne = Model => catchAsync(async (req, res, next) => {

    const doc = await Model.findByIdAndDelete(req.params.id);
    if (!doc) {
        return next(new AppError("No document Found!"), 404)
    }
    res.status(204).json({
        satus: "success",
        data: "Tour deleted successfully"
    })
})

exports.getOne = (Model, popOptions) => catchAsync(async (req, res, next) => {
    let query = Model.aggregate([
        { $sample: { size: 1 } }
    ]);

    if (popOptions) {
        query = Model.populate(query, popOptions);
    }

    const doc = await query;

    if (!doc || doc.length === 0) {
        return next(new AppError("No document found!"), 404);
    }

    res.status(200).json({
        status: "success",
        data: {
            data: doc[0]  // Since $sample returns an array, we take the first element
        }
    });
})