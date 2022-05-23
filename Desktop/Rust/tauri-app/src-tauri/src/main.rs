#![cfg_attr(
  all(not(debug_assertions), target_os = "windows"),
  windows_subsystem = "windows"
)]

use std::fs;
use run_script::ScriptOptions;
use std::env;


fn do_job(password: &String, file: &String, userhost: &String) -> String {
    println!("Rust working");

    fs::remove_file("/home/alonso/Downloads/data.txt");

    let options = ScriptOptions::new();
    let args = vec![];

    let argu_cons: Vec<String> = env::args().collect();

    let query = format!("expect /home/alonso/Desktop/Rust/tauri-app/src-tauri/download.exp {} {} {}", &password, &file, &userhost);
    // arg[1] = password
    // arg[2] = remote file location

    let (code, out, err) = run_script::run(
        &query,
        &args,
        &options
    )
    .unwrap();

    // println!("Code {}", code);
    // println!("Output from the query {}", out[0]);
    // println!("Errors {}", err);

    println!("Output -> {}", out);

    let output:String = out.to_owned();
    if output.contains("Error404") {
      println!("--> Error while trying to download a file <--");
      return String::from("false");
    }

    if output.contains("Permission denied, please try again") {
      println!("--> Error while trying to download a file <--");
      return String::from("false");
    }

    println!("--> Success! <--");
    return String::from("true");

}

#[tauri::command]
fn my_custom_command(password: String, file: String, userhost: String) -> String {
  println!("I was invoked from JS!");

  return do_job(&password, &file, &userhost);

}



fn main() {
  tauri::Builder::default()
    .invoke_handler(tauri::generate_handler![my_custom_command])
    .run(tauri::generate_context!())
    .expect("error while running tauri application");
}
