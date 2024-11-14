

const Social = () => {
    return (
        <div>
            <div className="font-semibold mb-3 text-xl">
                Login With
            </div>
            <div className="flex flex-col gap-2">
                <button className="btn btn-outline rounded-none btn-primary btn-xs"><span><i class="fa-brands fa-google"></i></span>Login With Google</button>
                <button className="btn btn-outline rounded-none btn-xs"><span><i class="fa-brands fa-github"></i></span>Login With Github</button>
            </div>
        </div>
    );
};

export default Social;