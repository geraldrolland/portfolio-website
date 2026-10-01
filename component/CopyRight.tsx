const CopyRight = () => {
    return (
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 text-xs text-muted">
            <p>&copy; {new Date().getFullYear()} Gerald Ujowundu. All rights reserved.</p>
            <p>Lagos, Nigeria</p>
        </div>
    );
};

export default CopyRight;
